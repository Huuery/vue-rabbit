import { useIntersectionObserver } from '@vueuse/core'
// lazy load directive files
export const lazyImages = {
    install(app) {
        //lazy load directive files here
        app.directive('img-lazy',
            {
                mounted(element, link) {
                    const { stop } = useIntersectionObserver(
                        element,
                        ([{ isIntersecting }]) => {
                            console.log("isIntersecting", isIntersecting);
                            if (isIntersecting) {
                                element.src = link.value;
                                stop()
                            }
                        },
                    )
                }
            }
        )
    }
}