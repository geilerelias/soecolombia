<template>
    <v-app>
        <v-card>
            <v-app-bar
                app
            >
                <v-subheader>Offset Top</v-subheader>
                {{ offsetTop }}
            </v-app-bar>
            <v-main v-scroll.self="onScroll">
                <v-container
                    class="overflow-y-auto"
                >
                    <v-row

                        align="center"
                        justify="center"
                    >
                        <v-col v-for="item in 100" :key="item.id">
                            <v-card height="200" width="200">
                                <v-card-text>
                                    elemento {{ item }}
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-card>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        offsetTop: 0,
    }),

    methods: {
        onScroll(e) {
            this.offsetTop = e.target.scrollTop
        },
    },
}
</script>
