<template>
    <v-container>
        <v-stepper v-model="e1" class="mt-5 dark">
          <v-stepper-header>
            <v-stepper-step editable color="green" :complete="e1 > 1" step="1"> <span class="green--text font-weight-bold lighten-3">ကိုယ်ရေးရာဇ၀င်</span> </v-stepper-step>

            <v-divider color="white"></v-divider>

            <v-stepper-step editable color="green" :complete="e1 > 2" step="2"> <span class="green--text font-weight-bold lighten-3">ခရီးသွား ရာဇ၀င်</span> </v-stepper-step>

            <v-divider color="white"></v-divider>

            <v-stepper-step color="green" :complete="e1 > 3" step="3"> <span class="green--text font-weight-bold lighten-3">သင်၏ QR</span> </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items  class="py-3">
            <v-stepper-content step="1">
              <v-card
                class="mb-12"
                color="white"
                height="350px"
              >
                <v-card-text>
                  <v-text-field label="အမည်" v-model="name"></v-text-field>
                  <v-text-field type="number" label="အသက်" v-model="age"></v-text-field>
                </v-card-text>
              </v-card>

              <v-btn
                outlined
                color="blue"
                @click="e1 = 2"
              >
                Continue
              </v-btn>

              <v-btn color="snow" text link to="/">Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card
                class="mb-12"
                color="white"
                height="350px"
              >
                <v-card-text>
                  <span>ခရီးသွားရာဇ၀င် ရှိ/မရှိ</span>
                  <v-radio-group v-model="radioGroup">
                      <v-radio 
                        value="1"
                        label="ရှိ"
                      ></v-radio>
                      <v-radio 
                        value="0"
                        label="မရှိ"
                      ></v-radio>
                  </v-radio-group>
                </v-card-text>
              </v-card>

              <v-btn
                outlined
                color="blue"
                @click="e1 = 3"
              >
                Continue
              </v-btn>

              <v-btn color="snow" text link to="/">Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card
                class="mb-12"
                color="dark"
                height="350px"
                align="center"
                justify="center"
              >
                  <!-- <span small class="snow--text">Techmation Myanmar &copy; {{ new Date().getFullYear() }}</span> -->
                  <v-container>
                    <v-layout row align="center" justify="center">
                      <v-flex xs12 align="center" justify="center">
                            <div id="download_node">
                                <canvas id="draw_canvas">
                                  
                                </canvas>
                              <v-flex xs12>
                                  <span class="small snow--text" v-if="generated">Techmation Myanmar &copy; {{ new Date().getFullYear() }}</span>
                              </v-flex>
                            </div>
                      </v-flex>
                    </v-layout>
                  </v-container>
              </v-card>
              <v-flex flex align="center" justify="center">
                <v-btn
                outlined
                color="blue"
                @click="downloadQR"
                v-if="generated"
                >
                  <v-icon>get_app</v-icon>
                  Download လုပ်ရန်
                </v-btn>
                <v-btn @click="generateQR" outlined class="green--text" v-if="!generated">
                  <v-icon>
                    qr_code
                  </v-icon>
                QR ထုတ်မည်
                </v-btn>
              </v-flex>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
    </v-container>
</template>
<script>
  import qrcode from 'qrcode'
  import file from 'file-saver'
  import htmlToImage from 'html-to-image'

  export default {
    data () {
      return {
        e1: 1,
        name : null,
        age : null,
        radioGroup : 1,
        generated : false 
      }
    },
    methods:{
      generateQR(){

          this.generated = true

          // get canvas to draw
          let draw_canvas = document.getElementById('draw_canvas');
          qrcode.toCanvas(draw_canvas,'TMM,'+this.name+','+this.age+','+this.radioGroup,function(error){
            if(error) console.log('error')
            console.log('success');
          })

      },
      downloadQR(){

        htmlToImage.toJpeg(document.getElementById('download_node'))
        .then(function(jpeg){
          file.saveAs(jpeg,'tmm_qr.jpeg')
        })
        
      }
    }
  }
</script>
<style>
#draw_canvas{
  width: 200px!important;
  height: auto !important;
}
#download_node{
  padding-top: 50px;
  width: 300px;
  height: 350px;
}
</style>