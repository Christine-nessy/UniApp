<script>
    export default {
        data () {
            return{
                students:
                [
           { firstname: 'John',
            lastname: 'Mwai',
            gender: 'M',
            email: 'john.mwai@greenville.edu',
            phone: '0711347623',
           
           },

           { firstname: 'Mark',
            lastname: 'Kilonzo',
            gender: 'M',
            email: 'mark.kilonzo@greenville.edu',
            phone: '0711343883',
           
           },
           { firstname: 'Celine',
            lastname: 'Wambui',
            gender: 'F',
            email: 'celine.wambui@greenville.edu',
            phone: '0711347623',
           
           },
           { firstname: 'Melissa',
            lastname: 'Kioko',
            gender: 'F',
            email: 'melissa.kioko@greenville.edu',
            phone: '0711347000',
           
           },
           { firstname: 'Karen',
            lastname: 'Mwai',
            gender: 'F',
            email: 'karen.mwai@greenville.edu',
            phone: '0710101762',
           
           }

            ]
         }
        }
    
    }

</script>
<template>
    
    <div id = 'students'>
        <v-container>
            <v-container>
                <v-layout column>
                    <v-card
                        class="mx-auto"
                        
                        color="#016A70"
                       
                    >
                      <v-toolbar
                            color="#FFFFDD"
                            theme="dark"
                        >
                            <v-toolbar-title
                             class="text-h6">
                                Students
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-container> <v-table>
    <thead class="header">
      <tr>
        <th class="text-left"> FirstName </th>
        <th class="text-left">LastName</th>
        <th class="text-left">Gender</th>
        <th class="text-left">Email</th>
        <th class="text-left">Phone</th>
      </tr>

    </thead>
    <tbody>
      <tr
        v-for="student in students" :key="student.name">

        <td>{{ student.firstname }}</td>
        <td>{{ student.lastname }}</td>
        <td>{{ student.gender }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.phone }}</td>
      </tr>
    </tbody>
  </v-table></v-container>
                       <v-divider></v-divider>
                    </v-card>
                    </v-layout>
             </v-container>
        </v-container>
        </div>



                
</template>