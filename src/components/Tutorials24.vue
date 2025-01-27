<template>
  <div class="mt-small w-100">
    <button
      v-for="type in ['live', 'online']"
      :key="type"
      class="theme mr-xsmall"
      :class="shownTutorials === type && 'active'"
      @click="shownTutorials = type">
      {{ type }}
    </button>
    <div
      v-for="tutorial in shownTutorials === 'live' ? tutorials : tutorialsOnline"
      :key="tutorial.id"
      class=" mt-large card p-small"
    >
      <a
        class="anchor"
        :id="getSlug(tutorial['Proposal title'], shownTutorials)"
      ></a>
      <div class="flex between">
        <h3>
          {{ tutorial['Proposal title'] }}
        </h3>
        <a
          v-if="!$store.state.isMobile"
          title="get link to tutorial"
          :href="`#${getSlug(tutorial['Proposal title'], shownTutorials)}`"
        >
          <link-icon style="transform: translateY(2px)" />
        </a>
      </div>
      <p class="type-small m-none">
        {{ format(new Date(tutorial.Start), 'MMM dd') }} {{ getShownTime(tutorial.Start) }} - {{ getShownTime(tutorial.End) }} ({{Intl.DateTimeFormat().resolvedOptions().timeZone}})
      </p>
      <div v-html="parseText(tutorial.Abstract)" />
      <details class="details">
        <summary>
          Full description
        </summary>
        <div v-html="parseText(tutorial.Description)" class="p-small" />
        <h3 class="pl-small">
          Lessons learned
        </h3>
        <div v-html="parseText(tutorial['Lessons Learned'])" class="p-small" />
        <h3 class="pl-small">
          Intended audience
        </h3>
        <div v-html="parseText(tutorial['Describe your intended audience'])" class="p-small" />
        <h3 class="pl-small">
          Suitable for
        </h3>
        <div v-html="parseText(tutorial['Is this suitable for ..?'])" class="p-small" />
      </details>
      <h3 class="mt-xlarge">Presenters</h3>
      <details
        v-for="(speakerId, i) in tutorial['Speaker IDs']"
        :key="speakerId"
        class="card sharper mb-medium mt-medium">
        <summary class="bio">
          <div class="middle" style="display: inline-flex">
            <div class="mr-small">
              <img :src="getSpeaker(speakerId)?.avatar || `${publicPath}/img/speaker_img_placeholder.jpg`" class="rounded-small block" style="width: 5rem; aspect-ratio: 1; object-fit: cover;" />
            </div>
            <div class="">
              <h4 class="type-small type-underline">
                  {{ getSpeaker(speakerId)?.name || workshop['Speaker names']?.[i] || "-" }}
                </h4>
            </div>
          </div>
        </summary>
        <div class="col-sm-12 p-medium pl-large pr-small">
            <p
              class="type-small m-none pl-2xsmall"
              v-html="parseText(getSpeaker(speakerId)?.biography) || '-'" />
          </div>
      </details>
    </div>
  </div>
</template>

<script>
import { marked } from 'marked'
import { format, isWithinInterval } from 'date-fns'
import LinkIcon from './icons/LinkIcon.vue'
import talksStatic from '../robocon-2024_sessions.json'

export default {
  name: 'Tutorials24',
  components: {
    LinkIcon
  },
  props: {
    speakers: {
      type: Array,
      required: true
    }
  },
  computed: {
    workshops: () => talksStatic.filter((talk) => talk['Session type'].en.includes('Workshop'))
  },
  created() {
    fetch('https://pretalx.com/api/events/robocon-2024/schedules/latest/')
      .then((res) => res.json())
      .then((res) => {
        // this.tutorials = res?.slots?.filter((talk) => talk?.slot?.room?.en === 'Eficode')
        //   .sort((a, b) => {
        //     if (new Date(a.slot?.start) < new Date(b.slot?.start)) return -1
        //     return 1
        //   })
        // this.tutorialsOnline = res?.slots?.filter((talk) => talk?.slot?.room?.en === 'RoboConOnline' && talk?.submission_type?.en === 'Tutorial')
        //   .sort((a, b) => {
        //     if (new Date(a.slot?.start) < new Date(b.slot?.start)) return -1
        //     return 1
        //   })
        this.tutorials = talksStatic.filter((talk) => talk['Session type']?.en === 'Tutorial' && talk.Room?.en === 'Eficode')
          .sort((a, b) => {
            if (new Date(a.Start) < new Date(b.Start)) return -1
            return 1
          })
        this.tutorialsOnline = talksStatic.filter((talk) => talk['Session type']?.en === 'Tutorial' && talk.Room?.en === 'RoboConOnline')
          .sort((a, b) => {
            if (new Date(a.Start) < new Date(b.Start)) return -1
            return 1
          })
      })
      .then(() => {
        const hash = window.location.hash
        if (hash.includes('online')) this.shownTutorials = 'online'
        this.$nextTick(() => {
          const el = document.getElementById(hash.slice(1))
          if (el) el.scrollIntoView()
        })
      })
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    tutorials: [],
    tutorialsOnline: [],
    shownTutorials: 'live'
  }),
  methods: {
    format,
    getShownTime(time) {
      const date = new Date(time)
      const hours = date.getHours()
      let minutes = date.getMinutes()
      if (`${minutes}`.length === 1) minutes = `0${minutes}`
      return `${hours}:${minutes === 0 ? '00' : minutes}`
    },
    parseText(description) {
      return marked.parse(description || '')
    },
    getSlug(title, tab) {
      if (!title) return ''
      let tabPrefix = 'live'
      console.log(tab)
      if (tab === 'online') tabPrefix = 'online'
      return `${tabPrefix}-${title.replace(/[ ]/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase()}`
    },
    getIsNow(start, end) {
      if (!start || !end) return false
      return isWithinInterval(this.dateNow, { start: new Date(start), end: new Date(end) })
    },
    getSpeaker(speakerId) {
      return this.speakers.find(({ code }) => code === speakerId)
    }
  }
}
</script>

<style scoped>
a.anchor {
  display: block;
  position: relative;
  top: -15vh;
  visibility: hidden;
}
details summary {
  cursor: pointer;
  list-style-type: ">";
  color: var(--color-theme);
  font-weight: 600;
}
details[open] > summary {
  list-style-type: '↓';
}
details summary.bio {
  list-style-type: '';
}
details.details >>> p {
  display: inline;
}
details.details >>> h1, details.details >>> h2 {
  font-size: 1.25rem;
}
details.details >>> ol {
  padding-left: 2rem;
}
details summary.bio::-webkit-details-marker {
  display:none;
}
</style>
