<template>
    <div class="bg-raisin-black py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <h2 class="text-base/7 font-semibold text-royal-purple">Training Programs</h2>
                <p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">Choose Your Fitness Journey</p>
            </div>
            <p class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-300 sm:text-xl/8">Select a training program that matches your goals and commitment level. Each plan includes personalized attention and expert guidance to help you succeed.</p>
            <div class="mt-16 flex justify-center">
                <fieldset aria-label="Payment frequency">
                    <RadioGroup v-model="frequency" class="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-royal-purple/20">
                        <RadioGroupOption as="template" v-for="option in frequencies" :key="option.value" :value="option" v-slot="{ checked }">
                            <div :class="[checked ? 'bg-royal-purple text-white' : 'text-gray-300', 'cursor-pointer rounded-full px-2.5 py-1']">{{ option.label }}</div>
                        </RadioGroupOption>
                    </RadioGroup>
                </fieldset>
            </div>
            <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <div v-for="tier in tiers" :key="tier.id" :class="[tier.mostPopular ? 'ring-2 ring-royal-purple' : 'ring-1 ring-royal-purple/20', 'rounded-3xl p-8 xl:p-10 bg-raisin-black/50']">
                    <div class="flex items-center justify-between gap-x-4">
                        <h3 :id="tier.id" :class="[tier.mostPopular ? 'text-royal-purple' : 'text-white', 'text-lg/8 font-semibold']">{{ tier.name }}</h3>
                        <p v-if="tier.mostPopular" class="rounded-full bg-royal-purple/10 px-2.5 py-1 text-xs/5 font-semibold text-royal-purple">Most popular</p>
                    </div>
                    <p class="mt-4 text-sm/6 text-gray-300">{{ tier.description }}</p>
                    <p class="mt-6 flex items-baseline gap-x-1">
                        <span class="text-4xl font-semibold tracking-tight text-white">{{ tier.price[frequency.value] }}</span>
                        <span class="text-sm/6 font-semibold text-gray-300">{{ frequency.priceSuffix }}</span>
                    </p>
                    <router-link
                        to="/services"
                        :aria-describedby="tier.id"
                        :class="[
                            tier.mostPopular
                                ? 'bg-royal-purple text-white shadow-sm hover:bg-purple-heart'
                                : 'text-white ring-1 ring-inset ring-royal-purple/20 hover:ring-purple-heart',
                            'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal-purple'
                        ]"
                    >
                        Start Training
                    </router-link>
                    <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-300 xl:mt-10">
                        <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                            <CheckIcon class="h-6 w-5 flex-none text-royal-purple" aria-hidden="true" />
                            {{ feature }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { RadioGroup, RadioGroupOption } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/20/solid'

const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]

const tiers = [
    {
        name: 'Basic Training',
        id: 'tier-basic',
        href: '#',
        mostPopular: false,
        description: 'Perfect for those starting their fitness journey.',
        price: { monthly: '$99', annually: '$999' },
        features: [
            'Personalized workout program',
            'Monthly check-ins',
            'Basic nutrition guidance',
            'Form check videos',
            'Access to training app'
        ],
    },
    {
        name: 'Premium Coaching',
        id: 'tier-premium',
        href: '#',
        mostPopular: true,
        description: 'Comprehensive support for serious results.',
        price: { monthly: '$199', annually: '$1,999' },
        features: [
            'Custom workout programming',
            'Weekly check-ins',
            'Detailed nutrition planning',
            'Priority support',
            '24/7 chat access',
            'Progress tracking',
            'Community access'
        ],
    },
    {
        name: 'Elite Performance',
        id: 'tier-elite',
        href: '#',
        mostPopular: false,
        description: 'Maximum support for competitive goals.',
        price: {monthly: '$299', annually: '$2,999'},
        features: [
            'Advanced programming',
            'Daily check-ins',
            'Competition prep',
            'Video analysis',
            'Custom meal plans',
            'Supplement guidance',
            'Priority 1:1 coaching'
        ],
    },
]

const frequency = ref(frequencies[0])
</script>
