<script>
    export default {
        data: () => ({
            first: null,
            last: null,
            email: null,
            password: null,
            phone: null,
            terms: false,
        }),
    }

</script>
<template>
    
    <div id = 'signup'>
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card
                        class="mx-auto"
                        width="500"
                        color="#016A70"
                       
                    >
                    <v-toolbar
                            color="#FFFFDD"
                            theme="dark"
                        >
                            <v-toolbar-title
                             class="text-h6">
                                User Registration
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-container>
                            <v-text-field
                                v-model="first"
                                color="black"
                                label="First name"
                                variant="underlined"
                            ></v-text-field>

                            <v-text-field
                                v-model="last"
                                color="black"
                                label="Last name"
                                variant="underlined"
                            ></v-text-field>

                            <v-text-field
                                v-model="email"
                                color="black"
                                label="Email"
                                variant="underlined"
                            ></v-text-field>

                            <v-text-field
                                v-model="phone"
                                color="black"
                                label="Phone"
                                variant="underlined"
                                type="number"
                            ></v-text-field>
                            <v-text-field
                                v-model="password"
                                color="black"
                                label="password"
                                placeholder="Enter your password"
                                variant="underlined"
                                type="password"
                            ></v-text-field>

                            <v-checkbox
                                v-model="terms"
                                color="secondary"
                                label="I agree to site terms and conditions"
                                ></v-checkbox>
                            </v-container>
                
                        <v-divider></v-divider>

                        <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn color="success">
                            Complete Registration
                            <v-icon icon="mdi-chevron-right" end></v-icon>
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-layout>
             </v-container>
        </v-container>
        </div>



                
</template>