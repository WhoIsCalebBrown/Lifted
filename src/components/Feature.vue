<script setup>

</script>

<template>
    <div class="relative isolate min-h-[calc(100vh-64px)] position-absolute">
        <!-- Background image container -->
        <div class="absolute inset-0 -z-20">
            <div class="w-full h-full bg-[url('/featureBG.jpg')] bg-cover bg-center"/>
        </div>

        <!-- Blurred purple gradient overlay -->
        <div class="absolute inset-0 -z-10">
            <div class="relative blur-3xl">
                <div
                    class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-heart to-royal-purple opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                />
            </div>
        </div>

        <!-- Content -->
        <div class="relative px-6 pt-14 lg:px-8">
            <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
<!--                <div class="hidden sm:mb-8 sm:flex sm:justify-center">-->
<!--                    <div class="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-purple-heart/10 hover:ring-purple-heart/20">-->
<!--                        Start your fitness journey today.-->
<!--                        <router-link to="/services" class="font-semibold text-purple-heart">-->
<!--                            <span class="absolute inset-0" aria-hidden="true" />Join now <span aria-hidden="true">&rarr;</span>-->
<!--                        </router-link>-->
<!--                    </div>-->
<!--                </div>-->
                <div class="text-center">
                    <h1 class="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">Transform Your Life Through Fitness</h1>
                    <p class="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8 drop-shadow-2xl">
                        Personalized training programs designed to help you reach your fitness goals. Start your journey today.
                    </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <router-link
                            to="/services"
                            class="rounded-md bg-royal-purple px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-heart focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-heart"
                        >
                            Get Started
                        </router-link>
                        <router-link
                            to="/about"
                            class="text-sm/6 font-semibold text-white"
                        >
                            Learn More <span aria-hidden="true">→</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>
