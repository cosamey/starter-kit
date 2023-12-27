import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./resources/**/*.{antlers.html,js,vue}'],
    theme: {
        extend: {},
    },
    plugins: [forms, typography],
};
