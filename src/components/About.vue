<template>
    <div class="relative isolate min-h-screen overflow-hidden bg-raisin-black py-24 sm:py-32">
        <img src="/homeBG.webp" alt="" class="absolute inset-0 -z-10 size-full object-cover object-right md:object-center" />
        <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-purple-heart to-royal-purple opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-purple-heart to-royal-purple opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="md:mt-40 sm:mt-2 mx-auto max-w-7xl px-6 lg:px-8">
            <div class="cemx-auto max-w-2xl lg:mx-0">
                <h2 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">About Our Training</h2>
                <p class="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">With over 10 years of experience in personal training, we've helped hundreds of clients achieve their fitness goals. Our approach combines science-based training methods with personalized attention to ensure you get the best results.</p>
            </div>
            <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                <div v-for="card in cards" :key="card.name" class="flex gap-x-4 rounded-xl bg-purple-heart/80 p-6 ring-1 ring-inset ring-purple-heart/20">
                    <component :is="card.icon" class="h-7 w-5 flex-none text-white" aria-hidden="true" />
                    <div class="text-base/7">
                        <h3 class="font-semibold text-white">{{ card.name }}</h3>
                        <p class="mt-2 text-gray-300">{{ card.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { PhoneIcon, LifebuoyIcon, NewspaperIcon } from '@heroicons/vue/24/outline'

const cards = [
    {
        name: 'Evidence-based Training',
        description: 'Our training programs are built on proven scientific methods and years of practical experience.',
        icon: PhoneIcon,
    },
    {
        name: 'Personalized Approach',
        description: 'Every program is tailored to your specific goals, fitness level, and lifestyle needs.',
        icon: LifebuoyIcon,
    },
    {
        name: 'Ongoing Support',
        description: 'Regular check-ins, progress tracking, and adjustments to ensure you stay on track to reach your goals.',
        icon: NewspaperIcon,
    },
]
</script>
