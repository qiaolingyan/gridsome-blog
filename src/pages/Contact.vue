<template>
  <Layout>
    <!-- Main Content-->
      <div class="post-wrap">
          <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
          <!-- Contact Form - Enter your email address on line 19 of the mail/contact_me.php file to make this form work.-->
          <!-- WARNING: Some web hosts do not allow emails to be sent through forms to common mail hosts like Gmail or Yahoo. It's recommended that you use a private domain email address!-->
          <!-- To use the contact form, your site must be on a live web host with PHP! The form will not work locally!-->
          <form id="contactForm" name="sentMessage" novalidate>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Name</label>
                <input v-model="form.name" class="form-control" id="name" type="text" placeholder="Name" required data-validation-required-message="Please enter your name." />
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Email Address</label>
                <input v-model="form.email" class="form-control" id="email" type="email" placeholder="Email Address" required data-validation-required-message="Please enter your email address." />
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <label>Phone Number</label>
                <input v-model="form.phone" class="form-control" id="phone" type="tel" placeholder="Phone Number" required data-validation-required-message="Please enter your phone number." />
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Message</label>
                <textarea v-model="form.message" class="form-control" id="message" rows="5" placeholder="Message" required data-validation-required-message="Please enter a message."></textarea>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <br />
            <div id="success"></div>
            <button class="btn btn-primary" id="sendMessageButton" type="submit" @click.prevent="onSubmit">Send</button>
          </form>
      </div>
  </Layout>
</template>
<page-query>
  query{
    general: allStrapiGeneral {
      edges{
        node{
          id
          title
          subtitle
          cover{
            url
          }
          profile{
          url
          }
          github_name
          github_url
        }
      }
    }
  }
</page-query>

<script>
  import {contacts} from '../api/contact'
  export default {
    name: "Contact",
    data(){
      return {
        form:{
          name:'',
          email:'',
          phone:'',
          message:''
        }
      }
    },
    methods:{
      async onSubmit(){
        try {
          await contacts(this.form)
          window.alert('提交成功')
          this.form = {
            name:'',
            email:'',
            phone:'',
            message:''
          }
        }catch(e){
          window.alert('提交失败')
        }
      }
    }
  }
</script>

<style scoped>

</style>
