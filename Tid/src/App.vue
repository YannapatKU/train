<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const Expanded = ref(false);


function toggleView() {
  Expanded.value = !Expanded.value;
}



const initialValues = ref({
  username: "",
  password: "",
});

const validUsername = 'b6521600000'
const validPassword = 'Pass@1234'


const resolver = ({ values }) => {
  const errors = {};

  if (!values.username) {
    errors.username = "กรุณากรอกชื่อผู้ใช้";
  }
  if (!values.password) {
    errors.password = "กรุณากรอกรหัสผ่าน";
  }
  return { errors };
};

const OnFormSubmit = ({ username, password }) => {
  if (username === validUsername && password === validPassword) {
    toast.add({
      severity: "success",
      summary: "เข้าสู่ระบบสำเร็จ",
      detail: "ยินดีต้อนรับสู่ระบบสารสนเทศบริหารการศึกษา",
    }); 
    window.location.href = 'https://www.youtube.com'
  } else {
    toast.add({
      severity: "error",
      summary: "เข้าสู่ระบบล้มเหลว",
      detail: "กรุณาตรวจสอบข้อมูลที่กรอก",
    });
    console.log('HTTP Status Code: 404 - Not Found')
  }
};
</script>

<template>
  <main>
    <Toast />
    <div class="flex justify-content-center align-items-center">
      <Card style="width: 25rem; margin-top: 10vh;">
        <template #header>
          <div class="text-center pt-3">
            <img alt="KU logo" src="https://my.ku.th/myku/favicon.ico" class="logo">
          </div>
        </template>

        <template #title>
          <div class="text-center" >
            <h1 style="font-weight: bold; color: rgb(0, 108, 104); font-size: 1.5em;">เข้าใช้งานระบบสารสนเทศบริหารการศึกษา</h1>
          </div>
        </template>

        <template #content>
          <div class="text-center mt-3">
              <RouterLink to="/home">
                <Button label="KU All-Login" style="width: 100%"/>  
              </RouterLink>
            </div>
        </template>

        <template #footer>
          <div class="border-top-1 border-300 pt-3 mt-3">
            <div class="flex justify-content-center align-items-center cursor-pointer text-primary font-medium" @click="toggleView">
              <span>เฉพาะผู้ดูแลระบบ</span>
              <i :class="['pi', Expanded ? 'pi-chevron-up' : 'pi-chevron-down', 'ml-2']"></i>
            </div>
               

             <div v-if="Expanded" class="text-center mt-3">
              <Form :initial-values="initialValues" :resolver="resolver" class="flex flex-column gap-3 mt-3 px-3" @submit="OnFormSubmit(initialValues)">
                <div class="flex flex-column align-items-start gap-1">
                  <label for="username">บัญชีผู้ใช้</label>
                  <InputText id="username" name="username" v-model="initialValues.username" placeholder="เช่น b63xxxxxx หรือ regxxx" class="w-full" />
                 
                </div>

                <div class="flex flex-column align-items-start gap-1">
                  <label for="password">รหัสผ่าน</label>
                  <InputText id="password" name="password" type="password" v-model="initialValues.password"  placeholder="รหัสผ่าน"  class="w-full" /> 
                  
                  
                
                </div>
                <Button type="submit" label="เข้าสู่ระบบ" class="w-full" />

              </Form>
            </div>
          </div>
        </template>

      </Card>
    </div>
  </main>
</template>

<style scoped>
.logo {
  height: 100px;
}

main {
  background-image: url("https://kps.ku.ac.th/v8/images/campus_photo/Tabebuia-rosea/cp-0006.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
}

.cursor-pointer {
  cursor: pointer;
}

p-input-icon-right > i {
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280; 
}
</style>
