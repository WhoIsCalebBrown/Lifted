<template>
    <div class="bg-raisin-black">
        <main>
            <!-- Pricing section -->
            <div class="isolate overflow-hidden">
                <div class="flow-root bg-raisin-black py-16 sm:pt-16 lg:pb-0">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div class="relative z-10">
                            <h1 class="mx-auto max-w-4xl text-balance text-center text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                                Training Programs for Every Level</h1>
                            <p class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-300 sm:text-xl/8">
                                Choose a program that matches your fitness goals and commitment level. Each plan
                                includes personalized attention and expert guidance.</p>
                            <div class="mt-16 flex justify-center">
                                <fieldset aria-label="Payment frequency">
                                    <RadioGroup v-model="frequency"
                                                class="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white">
                                        <RadioGroupOption as="template" v-for="option in pricing.frequencies"
                                                          :key="option.value" :value="option" v-slot="{ checked }">
                                            <div
                                                :class="[checked ? 'bg-royal-purple' : '', 'cursor-pointer rounded-full px-2.5 py-1']">
                                                {{ option.label }}
                                            </div>
                                        </RadioGroupOption>
                                    </RadioGroup>
                                </fieldset>
                            </div>
                        </div>

                        <div
                            class="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-8 lg:max-w-none lg:grid-cols-3">
                            <svg viewBox="0 0 1208 1024" aria-hidden="true"
                                 class="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0">
                                <ellipse cx="604" cy="512" fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" rx="604"
                                         ry="512"/>
                                <defs>
                                    <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                                        <stop stop-color="#6B46C1"/>
                                        <stop offset="1" stop-color="#553C9A"/>
                                    </radialGradient>
                                </defs>
                            </svg>

                            <div
                                class="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-royal-purple/10 lg:ring-1 lg:ring-white/10"
                                aria-hidden="true"/>

                            <div v-for="tier in pricing.tiers" :key="tier.id"
                                 :class="[
                                    tier.featured ? 'z-10 bg-purple-heart shadow-xl border border-granite-gray ring-1 ring-royal-purple/30' : 'bg-purple-heart/10 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                                    'relative rounded-2xl'
                                ]">
                                <div class="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                                    <h2 :id="tier.id" class="text-sm/6 font-semibold text-white">{{ tier.name }}</h2>
                                    <div
                                        class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                                        <div class="mt-2 flex items-center gap-x-4">
                                            <p class="text-4xl font-semibold tracking-tight text-white">
                                                {{ tier.price[frequency.value] }}</p>
                                            <div class="text-sm">
                                                <p class="text-white">CAD</p>
                                                <p class="text-gray-300">{{ `Billed ${frequency.value}` }}</p>
                                            </div>
                                        </div>
                                        <a :href="tier.href"
                                           :aria-describedby="tier.id"
                                           class="rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                           :class="[
                                               tier.featured ? 'bg-teal hover:bg-teal/70 focus-visible:outline-purple-heart' : 'bg-teal/80 hover:bg-teal/60 focus-visible:outline-white'
                                           ]">
                                            Start Training
                                        </a>
                                    </div>
                                    <div class="mt-8 flow-root sm:mt-10">
                                        <ul role="list"
                                            class="divide-white/5 border-white/5 text-white -my-2 divide-y border-t text-sm/6 lg:border-t-0">
                                            <li v-for="mainFeature in tier.highlights" :key="mainFeature"
                                                class="flex gap-x-3 py-2">
                                                <CheckIcon class="h-6 w-5 flex-none text-white"
                                                           aria-hidden="true"/>
                                                {{ mainFeature }}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative bg-raisin-black lg:pt-14">
                    <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
                        <!-- Feature comparison (up to lg) -->
                        <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
                            <h2 id="mobile-comparison-heading" class="sr-only">Feature comparison</h2>

                            <div class="mx-auto max-w-2xl space-y-16">
                                <div v-for="tier in pricing.tiers" :key="tier.id"
                                     class="border-t border-purple-heart/10">
                                    <div :class="[tier.featured ? 'border-royal-purple' : 'border-transparent', '-mt-px w-72 border-t-2 pt-10 md:w-80']">
                                        <h3 :class="[tier.featured ? 'text-royal-purple' : 'text-white', 'text-sm/6 font-semibold']">
                                            {{ tier.name }}
                                        </h3>
                                        <p class="mt-1 text-sm/6 text-gray-300">{{ tier.description }}</p>
                                    </div>

                                    <div class="mt-10 space-y-10">
                                        <div v-for="section in pricing.sections" :key="section.name">
                                            <h4 class="text-sm/6 font-semibold text-white">{{ section.name }}</h4>
                                            <div class="relative mt-6">
                                                <!-- Fake card background -->
                                                <div aria-hidden="true"
                                                     class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-raisin-black shadow-sm sm:block"/>
                                                <div :class="[tier.featured ? 'ring-2 ring-royal-purple' : 'ring-1 ring-royal-purple/10', 'relative rounded-lg bg-raisin-black shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0']">
                                                    <dl class="divide-y divide-royal-purple/10 text-sm/6">
                                                        <div v-for="feature in section.features" :key="feature.name"
                                                             class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
                                                            <dt class="pr-4 text-gray-300">{{ feature.name }}</dt>
                                                            <dd class="flex items-center justify-end sm:justify-center sm:px-4">
                                        <span v-if="typeof feature.tiers[tier.name.split(' ')[0]] === 'string'"
                                              :class="tier.featured ? 'font-semibold text-royal-purple' : 'text-white'">
                                            {{ feature.tiers[tier.name.split(' ')[0]] }}
                                        </span>
                                                                <template v-else>
                                                                    <CheckIcon
                                                                        v-if="feature.tiers[tier.name.split(' ')[0]]"
                                                                        class="mx-auto size-5 text-royal-purple"
                                                                        aria-hidden="true"
                                                                    />
                                                                    <XMarkIconMini
                                                                        v-else
                                                                        class="mx-auto size-5 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                    <span class="sr-only">
                                                {{ feature.tiers[tier.name.split(' ')[0]] ? 'Yes' : 'No' }}
                                            </span>
                                                                </template>
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                </div>

                                                <!-- Fake card border -->
                                                <div aria-hidden="true"
                                                     :class="[tier.featured ? 'ring-2 ring-royal-purple' : 'ring-1 ring-royal-purple/10', 'pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block']"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- Feature comparison (lg+) -->
                        <section aria-labelledby="comparison-heading" class="hidden lg:block">
                            <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

                            <div class="grid grid-cols-4 gap-x-8 border-t border-royal-purple/10 before:block">
                                <div v-for="tier in pricing.tiers" :key="tier.id" aria-hidden="true" class="-mt-px">
                                    <div
                                        :class="[tier.featured ? 'border-royal-purple' : 'border-transparent', 'border-t-2 pt-10']">
                                        <p :class="[tier.featured ? 'text-royal-purple' : 'text-white', 'text-sm/6 font-semibold']">
                                            {{ tier.name }}</p>
                                        <p class="mt-1 text-sm/6 text-gray-300">{{ tier.description }}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="-mt-6 space-y-16">
                                <div v-for="section in pricing.sections" :key="section.name">
                                    <h3 class="text-sm/6 font-semibold text-white">{{ section.name }}</h3>
                                    <div class="relative -mx-8 mt-10">
                                        <!-- Fake card backgrounds -->
                                        <div class="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                                             aria-hidden="true">
                                            <div class="size-full rounded-lg bg-raisin-black shadow-sm"/>
                                            <div class="size-full rounded-lg bg-raisin-black shadow-sm"/>
                                            <div class="size-full rounded-lg bg-raisin-black shadow-sm"/>
                                        </div>
                                        <table class="relative w-full border-separate border-spacing-x-8">
                                            <thead>
                                            <tr class="text-left">
                                                <th scope="col">
                                                    <span class="sr-only">Feature</span>
                                                </th>
                                                <th v-for="tier in pricing.tiers" :key="tier.id" scope="col">
                                                    <span class="sr-only">{{ tier.name }} tier</span>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(feature, featureIdx) in section.features" :key="feature.name">
                                                <th scope="row"
                                                    class="w-1/4 py-3 pr-4 text-left text-sm/6 font-normal text-white">
                                                    {{ feature.name }}
                                                    <div v-if="featureIdx !== section.features.length - 1"
                                                         class="absolute inset-x-8 mt-3 h-px bg-royal-purple/10"/>
                                                </th>
                                                <td v-for="tier in pricing.tiers" :key="tier.id"
                                                    class="relative w-1/4 px-4 py-0 text-center">
                                                    <span class="relative size-full py-3">
                                                        <span v-if="typeof feature.tiers[tier.name.split(' ')[0]] === 'string'"
                                                              :class="[tier.featured ? 'font-semibold text-royal-purple' : 'text-white', 'text-sm/6']">
                                                            {{ feature.tiers[tier.name.split(' ')[0]] }}
                                                        </span>
                                                        <template v-else>
                                                            <CheckIcon
                                                                v-if="feature.tiers[tier.name.split(' ')[0]]"
                                                                class="mx-auto size-5 text-royal-purple"
                                                                aria-hidden="true"
                                                            />
                                                            <XMarkIconMini
                                                                v-else
                                                                class="mx-auto size-5 text-gray-400"
                                                                aria-hidden="true"
                                                            />
                                                            <span class="sr-only">
                                                                {{ feature.tiers[tier.name.split(' ')[0]] ? 'Yes' : 'No' }}
                                                            </span>
                                                        </template>
                                                    </span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        <!-- Fake card borders -->
                                        <div
                                            class="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                                            aria-hidden="true">
                                            <div v-for="tier in pricing.tiers" :key="tier.id"
                                                 :class="[tier.featured ? 'ring-2 ring-royal-purple' : 'ring-1 ring-royal-purple/10', 'rounded-lg']"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <!-- FAQ section -->
            <div class="mx-auto max-w-7xl divide-y divide-royal-purple/10 px-6 lg:px-8 border-t-2 border-t-royal-purple">
                <h2 class="mt-10 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Frequently Asked Questions</h2>
                <dl class="mt-10 space-y-8 divide-y divide-royal-purple/10">
                    <div v-for="faq in faqs" :key="faq.id" class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                        <dt class="text-base/7 font-semibold text-white lg:col-span-5">{{ faq.question }}</dt>
                        <dd class="mt-4 lg:col-span-7 lg:mt-0">
                            <p class="text-base/7 text-gray-300">{{ faq.answer }}</p>
                        </dd>
                    </div>
                </dl>
            </div>

        </main>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {RadioGroup, RadioGroupOption} from '@headlessui/vue'
import {CheckIcon, XMarkIcon as XMarkIconMini} from '@heroicons/vue/20/solid'

const pricing = {
    frequencies: [
        {value: 'monthly', label: 'Monthly'},
        {value: 'annually', label: 'Annually'},
    ],
    tiers: [
        {
            name: 'Basic Training',
            id: 'tier-basic',
            href: '#',
            featured: false,
            description: 'Perfect for those starting their fitness journey.',
            price: {monthly: '$99', annually: '$999'},
            highlights: [
                'Personalized workout program',
                'Monthly check-ins',
                'Basic nutrition guidance',
                'Form check videos'
            ],
        },
        {
            name: 'Premium Coaching',
            id: 'tier-premium',
            href: '#',
            featured: true,
            description: 'Comprehensive support for serious results.',
            price: {monthly: '$199', annually: '$1,999'},
            highlights: [
                'Custom workout programming',
                'Weekly check-ins',
                'Detailed nutrition planning',
                'Priority support',
                '24/7 chat access',
                'Progress tracking'
            ],
        },
        {
            name: 'Elite Performance',
            id: 'tier-elite',
            href: '#',
            featured: false,
            description: 'Maximum support for competitive goals.',
            price: {monthly: '$299', annually: '$2,999'},
            highlights: [
                'Advanced programming',
                'Daily check-ins',
                'Competition prep',
                'Video analysis',
            ],
        },
    ],
    sections: [
        {
            name: 'Training Features',
            features: [
                {name: 'Workout Programming', tiers: {Basic: true, Premium: true, Elite: true}},
                {name: 'Check-ins', tiers: {Basic: 'Monthly', Premium: 'Weekly', Elite: 'Daily'}},
                {name: 'Form Analysis', tiers: {Basic: 'Basic', Premium: 'Advanced', Elite: 'In-depth'}},
                {name: 'Exercise Library Access', tiers: {Basic: 'Limited', Premium: 'Full', Elite: 'Full+Custom'}},
            ],
        },
        {
            name: 'Nutrition Support',
            features: [
                {name: 'Meal Planning', tiers: {Basic: 'Basic', Premium: 'Custom', Elite: 'Advanced'}},
                {name: 'Macro Tracking', tiers: {Basic: false, Premium: true, Elite: true}},
                {name: 'Supplement Guidance', tiers: {Basic: false, Premium: true, Elite: true}},
                {name: 'Restaurant Guides', tiers: {Basic: false, Premium: true, Elite: true}},
            ],
        },
        {
            name: 'Support & Communication',
            features: [
                {name: 'Chat Support', tiers: {Basic: 'Limited', Premium: '24/7', Elite: 'Priority'}},
                {name: 'Progress Tracking', tiers: {Basic: 'Monthly', Premium: 'Weekly', Elite: 'Daily'}},
                {name: '1:1 Coaching Calls', tiers: {Basic: false, Premium: 'Monthly', Elite: 'Weekly'}},
                {name: 'Community Access', tiers: {Basic: true, Premium: true, Elite: true}},
            ],
        },
    ],
}

const faqs = [
    {
        id: 1,
        question: "How often will we communicate?",
        answer: "Communication frequency depends on your chosen plan. Basic includes monthly check-ins, Premium offers weekly sessions, and Elite provides daily support and form checks.",
    },
    {
        id: 2,
        question: "Do I need gym access for these programs?",
        answer: "While gym access is ideal, all programs can be modified for home workouts with minimal equipment. We'll work together to create a program that fits your available resources.",
    },
    {
        id: 3,
        question: "Can I switch plans later?",
        answer: "Absolutely! You can upgrade or change your plan at any time. We'll help you transition smoothly to ensure continuous progress toward your goals.",
    },
    {
        id: 4,
        question: "What if I have dietary restrictions?",
        answer: "All nutrition plans are fully customized to accommodate your dietary needs, preferences, and restrictions while ensuring you meet your fitness goals.",
    },
    {
        id: 5,
        question: "How do the check-ins work?",
        answer: "Check-ins are conducted through our app where you'll submit progress photos, measurements, and feedback. We'll review your progress and adjust your program accordingly.",
    }
]

const frequency = ref(pricing.frequencies[0])
</script>
