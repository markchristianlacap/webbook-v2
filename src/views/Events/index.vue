<template>
  <v-layout class="pa-1">
    <v-flex xs12 md2>
      <sidebar />
    </v-flex>
    <v-flex>
      <v-card dense class="pa-2">
        <p class="headline grey--text font-weight-bold text-center">Crop Scheduler</p>
        <p class="grey--text text-center">The scheduler automatically give an schedules based on the date that had been entered.</p>
        <v-row class="fill-height">
          <v-col>
            <v-sheet height="64">
              <v-toolbar flat color="white">
                <v-btn color="primary" dense x-small class="mr-4" @click="dialog = true">
                  Add schedule
                </v-btn>
                <v-btn outlined dense x-small class="mr-4" @click="setToday">
                  Today
                </v-btn>
                <v-btn fab text small @click="prev">
                  <v-icon small>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn fab text small @click="next">
                  <v-icon small>mdi-chevron-right</v-icon>
                </v-btn>
                <v-toolbar-title class="subtitle">{{ title }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-menu bottom right>
                  <template v-slot:activator="{ on }">
                    <v-btn outlined dense x-small v-on="on">
                      <span>{{ typeToLabel[type] }}</span>
                      <v-icon right>mdi-menu-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list dense>
                    <v-list-item @click="type = 'day'">
                      <v-list-item-title>Day</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'week'">
                      <v-list-item-title>Week</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = 'month'">
                      <v-list-item-title>Month</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="type = '4day'">
                      <v-list-item-title>4 days</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-toolbar>
            </v-sheet>

            <v-dialog v-model="dialog" dense max-width="500">
              <v-card>
                <v-toolbar color="primary" dark flat dense>
                  <v-toolbar-title>Add schedule of planting</v-toolbar-title>
                </v-toolbar>
                <v-container>
                  <v-form>
                    <v-flex>
                      <v-select v-model="addEventData.name" :items="['Rice', 'Corn']" label="Crop"></v-select>
                    </v-flex>
                    <v-text-field v-model="addEventData.details" dense type="text" label="Details"></v-text-field>
                    <v-text-field v-model="addEventData.start" dense type="date" label="Start (required)"></v-text-field>
                    <v-text-field v-model="addEventData.end" dense type="date" label="End (required)"></v-text-field>
                    <v-color-picker v-model="addEventData.color" mode="hexa"></v-color-picker>
                  </v-form>
                </v-container>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn type="submit" small outlined color="primary" text @click="addEvent(addEventData)">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-sheet height="500">
              <v-calendar
                ref="calendar"
                v-model="focus"
                color="primary"
                :events="schedules"
                :event-color="getEventColor"
                :event-margin-bottom="3"
                :now="today"
                :type="type"
                @click:event="showEvent"
                @click:more="viewDay"
                @click:date="viewDay"
                @change="updateRange"
              ></v-calendar>
              <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
                <v-card dense color="grey lighten-4" min-width="350px" flat>
                  <v-toolbar :color="selectedEvent.color" dark dense>
                    <v-btn icon @click="deleteEvent(selectedEvent.id)">
                      <v-icon color="red darken-1">fa-trash</v-icon>
                    </v-btn>
                    <v-toolbar-title v-text="selectedEvent.name"></v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <span v-text="selectedEvent.details"></span>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text small outlined color="deep-orange" @click="selectedOpen = false">
                      close
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import sidebar from "@/components/Sidebar"
import firebase from "@/firebase"
import "firebase/firestore"
const db = firebase.firestore()
export default {
  components: {
    sidebar
  },
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: "month",
    dialog: null,
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days"
    },
    start: null,
    end: null,
    selectedEvent: {},
    addEventData: {},
    selectedElement: null,
    selectedOpen: false
  }),
  computed: {
    schedules() {
      return this.$store.getters.schedules
    },
    title() {
      const { start, end } = this
      if (!start || !end) {
        return ""
      }

      const startMonth = this.monthFormatter(start)
      const endMonth = this.monthFormatter(end)
      const suffixMonth = startMonth === endMonth ? "" : endMonth

      const startYear = start.year
      const endYear = end.year
      const suffixYear = startYear === endYear ? "" : endYear

      const startDay = start.day + this.nth(start.day)
      const endDay = end.day + this.nth(end.day)

      switch (this.type) {
        case "month":
          return `${startMonth} ${startYear}`
        case "week":
        case "4day":
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
        case "day":
          return `${startMonth} ${startDay} ${startYear}`
      }
      return ""
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long"
      })
    }
  },
  mounted() {
    this.$refs.calendar.checkChange()
  },
  async created() {
    if (!this.$store.state.schedules.length) await this.$store.dispatch("get", "schedules")
  },
  methods: {
    async updateEvent(ev) {
      await db
        .collection("schedules")
        .doc(this.currentlyEditing)
        .update({
          details: ev.details
        })
      this.selectedOpen = false
      this.currentlyEditing = null
    },
    async deleteEvent(id) {
      await db
        .collection("schedules")
        .doc(id)
        .delete()
      this.selectedOpen = false
    },
    async addEvent(event) {
      if (event.name && event.start && event.end) {
        event.color = event.color.hex
        event.AuthID = this.$store.state.user.uid
        await db.collection("schedules").add(event)
        this.addEventData = {}
      } else {
        alert("You must add schedule name, start, and end time")
      }
      this.dialog = false
    },
    viewDay({ date }) {
      this.focus = date
      this.type = "day"
    },
    getEventColor(event) {
      return event.color
    },
    setToday() {
      this.focus = this.today
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => (this.selectedOpen = true), 10)
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
    updateRange({ start, end }) {
      this.start = start
      this.end = end
    },
    nth(d) {
      return d > 3 && d < 21 ? "th" : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][d % 10]
    }
  }
}
</script>

<style></style>
