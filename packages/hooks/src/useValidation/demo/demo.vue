<template>
    <div>
        <p v-if="isValid()" class="text-success">
            全部验证通过
        </p>
        <form>
            <div :class="{ 'text-error': isInvalid('name'), 'text-success': isValid('name') }">
                <input type="text" v-model="form.name" placeholder="name">
                <p v-if="isInvalid('name')">{{ getResult("name") }}</p>
            </div>
            <div :class="{ 'text-error': isInvalid('email'), 'text-success': isValid('email') }">
                <input type="text" v-model="form.email" placeholder="email">
                <p v-if="isInvalid('email')">{{ getResult("email") }}</p>
            </div>
            <div :class="{ 'text-error': isInvalid('password'), 'text-success': isValid('password') }">
                <input type="password" v-model="form.password" placeholder="password">
                <p v-if="isInvalid('password')">{{ getResult("password") }}</p>
            </div>
            <div
                :class="{ 'text-error': isInvalid('password_confirmation'), 'text-success': isValid('password_confirmation') }">
                <input type="password" v-model="form.password_confirmation" placeholder="password">
                <p v-if="isInvalid('password_confirmation')">{{ getResult("password_confirmation") }}</p>
            </div>
            <button @click="onValidate" type="button">验证</button>
            <button @click="onValidateField" type="button">部分验证</button>
            <button @click="onClearValidate" type="button">清空验证</button>
        </form>
    </div>
</template>
<style deep>
.text-error {
    color: red;
}

.text-success {
    color: green;
}

input {
    border-color: inherit;
}
</style>
<script setup lang="ts">
import { useValidation } from '@lemonpeel2/hooks';
import { reactive } from 'vue';

const form = reactive({
    email: '',
    password: '',
    name: '',
    password_confirmation: '',
});

const { validate, validateField, clearValidate, isInvalid, isValid, getResult } = useValidation(form, {
    name: {
        required: true,
        min: 3,
        max: 10,
    },
    email: {
        required: true,
        type: "email"
    },
    password: {
        required: true,
        min: 6,
        max: 20,
    },
    password_confirmation: [
        {
            required: true,
            min: 6,
            max: 20,
        },
        {
            validator: (_, value, callback) => {
                if (value !== form.password) {
                    callback(new Error('两次输入的密码不一致'));
                } else {
                    callback();
                }
            },
        },
    ]
}, { first: true, firstFields: true })

const onClearValidate = () => {
    clearValidate();
}

const onValidateField = () => {
    validateField(["email", "password"]).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
}

const onValidate = () => {
    validate().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
};
</script>