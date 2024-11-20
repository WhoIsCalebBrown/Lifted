<template>
    <div class="relative isolate bg-raisin-black">
        <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div class="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                    <div class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-purple-heart/5 lg:w-1/2">
                        <svg class="absolute inset-0 size-full stroke-royal-purple/70 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
                            <defs>
                                <pattern id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse">
                                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                                </pattern>
                            </defs>
                            <svg x="100%" y="-1" class="overflow-visible fill-purple-heart/20">
                                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
                            </svg>
                            <rect width="100%" height="100%" stroke-width="0" fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
                        </svg>
                        <div class="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]" aria-hidden="true">
                            <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-royal-purple to-purple-heart opacity-20" style="clip-path: polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)" />
                        </div>
                    </div>
                    <h2 class="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Get in touch</h2>
                    <p class="mt-6 text-lg/8 text-gray-300">Ready to start your fitness journey? Contact me to discuss your goals and how we can work together to achieve them.</p>
                    <dl class="mt-10 space-y-4 text-base/7 text-gray-300">
                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">Address</span>
                                <BuildingOffice2Icon class="h-7 w-6 text-royal-purple" aria-hidden="true" />
                            </dt>
                            <dd>Waterloo, ON</dd>
                        </div>
                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">Telephone</span>
                                <PhoneIcon class="h-7 w-6 text-royal-purple" aria-hidden="true" />
                            </dt>
                            <dd><a class="hover:text-royal-purple" href="tel:+1 (555) 234-5678">+1 (555) 234-5678</a></dd>
                        </div>
                        <div class="flex gap-x-4">
                            <dt class="flex-none">
                                <span class="sr-only">Email</span>
                                <EnvelopeIcon class="h-7 w-6 text-royal-purple" aria-hidden="true" />
                            </dt>
                            <dd><a class="hover:text-royal-purple" href="mailto:hello@lift-ed.com">hello@lift-ed.com</a></dd>
                        </div>
                    </dl>
                </div>
            </div>
            <form @submit.prevent="handleSubmit" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label for="first-name" class="block text-sm/6 font-semibold text-white">First name</label>
                            <div class="mt-2.5">
                                <input
                                    v-model="formData['first-name']"
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    autocomplete="given-name"
                                    class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-purple-heart/10 focus:ring-2 focus:ring-inset focus:ring-purple-heart sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <label for="last-name" class="block text-sm/6 font-semibold text-white">Last name</label>
                            <div class="mt-2.5">
                                <input
                                    v-model="formData['last-name']"
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autocomplete="family-name"
                                    class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-purple-heart/10 focus:ring-2 focus:ring-inset focus:ring-purple-heart sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm/6 font-semibold text-white">Email</label>
                            <div class="mt-2.5">
                                <input
                                    v-model="formData.email"
                                    type="email"
                                    name="email"
                                    id="email"
                                    autocomplete="email"
                                    class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-purple-heart/10 focus:ring-2 focus:ring-inset focus:ring-purple-heart sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="phone-number" class="block text-sm/6 font-semibold text-white">Phone number</label>
                            <div class="mt-2.5">
                                <input
                                    v-model="formData['phone-number']"
                                    type="tel"
                                    name="phone-number"
                                    id="phone-number"
                                    autocomplete="tel"
                                    class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-purple-heart/10 focus:ring-2 focus:ring-inset focus:ring-purple-heart sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block text-sm/6 font-semibold text-white">Message</label>
                            <div class="mt-2.5">
                                <textarea
                                    v-model="formData.message"
                                    name="message"
                                    id="message"
                                    rows="4"
                                    class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-purple-heart/10 focus:ring-2 focus:ring-inset focus:ring-purple-heart sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 flex justify-end">
                        <button type="submit" class="rounded-md bg-royal-purple px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-heart focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-heart">Send message</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'

// Create reactive form data
const formData = ref({
    'first-name': '',
    'last-name': '',
    'email': '',
    'phone-number': '',
    'message': ''
})

const handleSubmit = async (e) => {
    try {
        const response = await fetch('https://jow6hm5wuc.execute-api.us-east-2.amazonaws.com/default/contactFormToEmail', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData.value)
        });

        // Add response logging for debugging
        console.log('Response status:', response.status);
        const responseText = await response.text();
        console.log('Response body:', responseText);

        if (response.ok) {
            alert('Message sent successfully!');
            e.target.reset();
        } else {
            throw new Error(`Failed to send message: ${response.status}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error sending message. Please try again later.');
    }
};
</script>


