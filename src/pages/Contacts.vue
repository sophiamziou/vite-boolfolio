<script>
import axios from "axios";
export default {
    data() {
        return {
            errors: null,
            name: '',
            surname: '',
            phone: '',
            email: '',
            content: '',
            baseUrl: "http://127.0.0.1:8000",
            success: false,
            loading: false,
        };
    },
    methods: {
        saveForm() {
            const data = {
                name: this.name,
                surname: this.surname,
                phone: this.phone,
                email: this.email,
                content: this.content,
            }
            this.loading = true;
            this.errors = null;
            axios.post(`${this.baseUrl}/api/contacts`, data).then((response) => {
                if (!response.data.success) {
                    this.errors = response.data.errors;
                    this.loading = false;
                } else {
                    this.name = '';
                    this.surname = '';
                    this.phone = '';
                    this.email = '';
                    this.content = '';
                    this.success = true;
                    this.loading = false;
                }
            });
        },
    },
};
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div v-if="this.success" class="text-success">
                    messaggio inviato con successo
                </div>
                <form @submit.prevent="saveForm">
                    <div class="row">
                        <div class="col-12 col-md-6 my-2">
                            <label for="nome" class="control-label">Nome</label>
                            <input type="text" class="form-control" name="name" id="nome" placeholder="Nome" v-model="name">
                            <div v-if="errors != null">
                                <div v-for="(error, index) in errors.name" :key="`message-error-${index}`"
                                    class="text-danger">
                                    {{ error }}
                                </div>
                            </div>
                        </div>
                        <div class=" col-12 col-md-6 my-2">
                            <label for="cognome" class="control-label">Cognome</label>
                            <input type="text" class="form-control" name="surname" id="cognome" placeholder="Cognome"
                                v-model="surname">
                            <div v-if="errors != null">
                                <div v-for="(error, index) in errors.surname" :key="`message-error-${index}`"
                                    class="text-danger">
                                    {{ error }} </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 my-2">
                            <label for="email" class="control-label">Email</label>
                            <input type="mail" class="form-control" name="email" id="email" placeholder="Email"
                                v-model="email">
                            <div v-if="errors != null">
                                <div v-for="(error, index) in errors.email" :key="`message-error-${index}`"
                                    class="text-danger">
                                    {{ error }}
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 my-2">
                            <label for="phone" class="control-label">Telefono</label>
                            <input type="phone" class="form-control" name="phone" id="phone" placeholder="Telefono"
                                v-model="phone">
                            <div v-if="errors != null">
                                <div v-for="(error, index) in errors.phone" :key="`message-error-${index}`"
                                    class="text-danger">
                                    {{ error }} </div>
                            </div>
                        </div>
                        <div class="col-12 my-2">
                            <label for="content" class="control-label">Scrivi un messaggio personalizzato</label>
                            <textarea name="content" id="content" v-model="content" cols="30" rows="10"
                                class="form-control"></textarea>
                            <div v-if="errors != null">
                                <div v-for="(error, index) in errors.content" :key="`message-error-${index}`"
                                    class="text-danger">
                                    {{ error }} </div>
                            </div>
                        </div>
                        <div class="col-12 my-2 text-center">
                            <button type="submit" class="send_email btn btn-primary" :disabled="loading">
                                {{ loading ? `Invio in corso...` : `Invia` }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>