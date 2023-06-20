<template>
  <div class="dashboard">
    <h1 class="body-2 grey--text">Dashboard</h1>

    <v-container class="my-15"> <!--ممكن احط fluid-->

      <v-layout class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>sort project by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="text-right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam ad similique nobis omnis adipisci debitis perferendis quidem excepturi corrupti. Quisquam, modi illo! A vel, illo animi corrupti porro doloremque.' },
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2021', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam ad similique nobis omnis adipisci debitis perferendis quidem excepturi corrupti. Quisquam, modi illo! A vel, illo animi corrupti porro doloremque.' },
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2021', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam ad similique nobis omnis adipisci debitis perferendis quidem excepturi corrupti. Quisquam, modi illo! A vel, illo animi corrupti porro doloremque.' },
        { title: 'Creat a community forum', person: 'Gouken', due: '20th oct 2022', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam ad similique nobis omnis adipisci debitis perferendis quidem excepturi corrupti. Quisquam, modi illo! A vel, illo animi corrupti porro doloremque.' },
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1) //1 if we need to change the order "false", -1 if we dont need to change the order "true"
    }
  }
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2 !important;
}

.v-chip.ongoing {
  background: #ffaa2c !important;
}

.v-chip.overdue {
  background: #f83e70 !important;
}
</style>
