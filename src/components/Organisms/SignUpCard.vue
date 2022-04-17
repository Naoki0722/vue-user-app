<template>
  <v-card elevation="1"  width="40%" class="mx-auto mt-12">
    <Title title="新規登録フォーム" />
    <v-card-text class="mb-8">
      <v-form>
        <v-file-input type="file" name="image" label="アイコン画像" @change="fileSelected" />
        <TextField icon='mdi-account-circle' label='名前' type='name' :inputValue='input.name' @parentMethod="inputText" />
        <TextField icon='mdi-email' label='メールアドレス' type='email' :inputValue='input.email' @parentMethod="inputText" />
        <TextField icon='mdi-cellphone' label='電話番号' type='tell' :inputValue='input.tell' @parentMethod="inputText" />
        <TextField icon='mdi-account-circle' label='アカウントID' type='user_id' :inputValue='input.user_id' @parentMethod="inputText" />
        <TextField icon='mdi-twitter' label='SNSアカウント' type='account' :inputValue='input.account' @parentMethod="inputText" />
        <SelectField icon='mdi-account' label='上司名' type='introducer' :inputValue='input.introducer' :items="users" @parentMethod="inputText"/>
        <SelectField icon='mdi-account' label='直下の人' type='directly' :inputValue='input.directly' :items="users" @parentMethod="inputText"/>
        <TextField icon='mdi-lock' label='パスワード' inputType="password" type='password' :inputValue='input.password' @parentMethod="inputText" />
        <Button :loadingStatus='loadingStatus' @auth="auth" buttonText='新規登録' />
      </v-form>
    </v-card-text>
  </v-card>
</template>


<script>
import axios from 'axios'
import Title from '../Atoms/Title';
import TextField from '../Atoms/TextField';
import SelectField from '../Atoms/SelectField';
import Button from '../Atoms/Button';
export default {
  data() {
    return {
      input: {
        name: "",
        email: "",
        tell: "",
        user_id: "",
        account: "",
        introducer: "",
        directly: "",
        password: "",
        img: "",
        message: '',
      },
      users: [],
      isLoading: false
    };
  },
  components: {
    Title,
    TextField,
    SelectField,
    Button
  },
  async created() {
    let data = [];
    await axios
      .get(`${process.env.VUE_APP_API_URL}/api/user/all`)
      .then((response) => {
        data.push(response.data);
    });
    this.users = data[0].data;
  },
  methods: {
    inputText (inputValue) {
      this.input[inputValue.element] = inputValue.data
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
    fileSelected(e) {
      const images = e;
      this.getBase64(images).then((response) => this.input.img = response);
    },
    auth() {
      this.isLoading = true;
      axios
        .post(`${process.env.VUE_APP_API_URL}/register`, this.input)
        .then(response => {
          console.log(response);
          this.isLoading = false;
          alert('新規登録完了しました');
          this.$router.replace('/login');
        })
        .catch(error => {
          console.error(error);
          this.isLoading = false;
          alert('エラーが発生しました、管理者にお問合せください');
        });
    },
  },
  computed: {
    loadingStatus() {
      return this.isLoading
    }
  }
};
</script>
