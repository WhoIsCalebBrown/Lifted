<template>
    <div class="bg-raisin-black">
        <main class="isolate">
            <!-- Hero section -->
            <div class="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-purple-heart/20 pt-14">
                <div class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-raisin-black shadow-xl shadow-purple-heart/10 ring-1 ring-purple-heart/50 sm:-mr-80 lg:-mr-96" aria-hidden="true"/>
                <div class="mx-auto max-w-7xl px-6 py-4 pb-12 sm:py-4 sm:pb-20 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                        <h1 class="max-w-2xl text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl lg:col-span-2 xl:col-auto">
                            From Figure Skater to Fitness Professional
                        </h1>
                        <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                            <p class="text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                                With a Bachelor's in Kinesiology, NASM certification, and CanFit Pro qualification, I blend my competitive figure skating background with scientific expertise to create transformative fitness experiences.
                            </p>
                        </div>
                        <img src="/homeBG.webp" alt="Training Session" class="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"/>
                    </div>
                </div>
                <div class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-raisin-black sm:h-32"/>
            </div>

            <!-- Timeline section -->
            <div class="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    <div v-for="item in timeline" :key="item.name">
                        <time :datetime="item.dateTime" class="flex items-center text-sm/6 font-semibold text-royal-purple">
                            <svg viewBox="0 0 4 4" class="mr-4 size-1 flex-none" aria-hidden="true">
                                <circle cx="2" cy="2" r="2" fill="currentColor"/>
                            </svg>
                            {{ item.date }}
                            <div class="absolute -ml-2 h-px w-screen -translate-x-full bg-purple-heart/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0" aria-hidden="true"/>
                        </time>
                        <p class="mt-6 text-lg/8 font-semibold tracking-tight text-white">{{ item.name }}</p>
                        <p class="mt-1 text-base/7 text-gray-300">{{ item.description }}</p>
                    </div>
                </div>
            </div>
            <div class="mt-32 overflow-hidden sm:mt-40">
                <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                        <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                            <h2 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl">My Approach</h2>
                            <p class="mt-6 text-xl/8 text-gray-300">Combining my competitive athletic background with evidence-based training principles, I create programs that challenge and transform. Every client's journey is unique, and that's why personalization is at the heart of everything I do.</p>
                            <p class="mt-6 text-base/7 text-gray-300">From figure skating to strength training, my journey has taught me that true fitness is about more than just physical change—it's about building confidence, strength, and sustainable habits that last a lifetime.</p>
                        </div>
                        <div class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                            <!-- Image grid structure remains the same, update image sources to your training photos -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats -->
            <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Transforming Lives Through Personalized Fitness</h2>
                    <p class="mt-6 text-base/7 text-gray-300">Every client's success story adds to our growing community of stronger, healthier, and more confident individuals.</p>
                </div>
                <div class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
                    <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-purple-heart/10 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                        <p class="flex-none text-3xl font-bold tracking-tight text-white">100+</p>
                        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p class="text-lg font-semibold tracking-tight text-white">Active Clients</p>
                            <p class="mt-2 text-base/7 text-gray-300">Achieving their fitness goals through personalized training programs.</p>
                        </div>
                    </div>
                    <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-purple-heart/20 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                        <p class="flex-none text-3xl font-bold tracking-tight text-white">2,500+</p>
                        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p class="text-lg font-semibold tracking-tight text-white">Training Sessions Completed</p>
                            <p class="mt-2 text-base/7 text-gray-300">Each session carefully designed to maximize results and build confidence.</p>
                        </div>
                    </div>
                    <div class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-purple-heart p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                        <p class="flex-none text-3xl font-bold tracking-tight text-white">90%</p>
                        <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                            <p class="text-lg font-semibold tracking-tight text-white">Client Goal Achievement Rate</p>
                            <p class="mt-2 text-base/7 text-gray-200">Our clients consistently reach and exceed their fitness goals through dedication and proper guidance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
const timeline = [
    {
        name: 'Provincial Figure Skating',
        description: 'Competed at the provincial level in figure skating, developing discipline, grace, and dedication to physical excellence.',
        date: '2010-2018',
        dateTime: '2010/2018',
    },
    {
        name: 'Kinesiology Degree',
        description: "Earned Bachelor's degree in Kinesiology, building a strong foundation in human movement and exercise science.",
        date: '2018-2022',
        dateTime: '2018/2022',
    },
    {
        name: 'NASM & CanFit Pro',
        description: 'Obtained NASM certification and CanFit Pro qualification, combining academic knowledge with practical training expertise.',
        date: '2022',
        dateTime: '2022',
    },
    {
        name: 'Professional Trainer',
        description: 'Launched professional training career, helping clients achieve their fitness goals through personalized programs.',
        date: '2023',
        dateTime: '2023',
    },
]
</script>
