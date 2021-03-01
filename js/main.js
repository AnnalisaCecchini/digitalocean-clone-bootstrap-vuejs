// ASSOCIO IL FILE JS

const app = new Vue ({
    el: '#app',
    // compilo i dati
    data: {
        indexPhoto: 0,
        indexSlide: 0,
        slides: [
            {
                img: './img/slide1-1.webp',
                text: 'Build, deploy and scale apps quickly using App Platform. We’ll manage the infrastructure, app runtimes, and dependencies, so that you can push code to production in just a few clicks.'
            }, 
            {
                img: './img/slide1-2.webp',
                text: 'Use Kubernetes to improve availability, scalability, and resource efficiency of your containerized applications.'
            }, 
            {
                img: './img/slide1-3.webp',
                text: 'Choose the machine type that’s right for your app – and  spin up in 55 seconds or less.'
            }, 
            {
                img: './img/slide1-4.webp',
                text: 'Quickly and easily provision a high-performance database cluster.'
            }, 
            {
                img: './img/slide1-5.webp',
                text: 'Store assets, media, and more using Spaces object storage with a built-in CDN.'
            }, 
            {
                img: './img/slide1-6.webp',
                text: 'Easily organize, manage, and update your infrastructure using Projects and Teams.'
            }
        ],
        photos: [
            {
                img: './img/slider2/slider2-1.webp',
                quote: ' "We have been able to make scaling the technical infrastructure of our business cost effective and efficient." ', 
                link: 'Read story', 
                name: 'Rick O\'Tool',
                role: 'CO-Founder and CTO'
            }, 
            {
                img: './img/slider2/slider2-2.webp',
                quote: ' "Our hosting costs have decreased by over 90% and we’re running at about 25% of our capacity allowing us to quickly scale." ', 
                link: 'Read story', 
                name: 'Jamie Druce',
                role: 'Senior Web Developer'
            }, 
            {
                img: './img/slider2/slider2-3.webp',
                quote: ' "Ghost(Pro) was migrated to DigitalOcean to enable on-demand scaling." ', 
                link: 'Read story', 
                name: 'Sebastian Gierlinger',
                role: 'Senior DevOps Engineer'
            }
        ], 
        intervalID: 0
    },
    methods: {
        nextSlide() {
            this.indexSlide += 1;

            if (this.indexSlide > (this.slides.length - 1)) {
                this.indexSlide = 0;
            }
        },
        prevSlide() {
            this.indexSlide -= 1;

            if (this.indexSlide < 0) {
                this.indexSlide = this.slides.length - 1;
            }
        },
        setSlide(index) {
            this.indexSlide = index;
        },

        nextPhoto() {
            this.indexPhoto += 1;

            if (this.indexPhoto > (this.photos.length - 1)) {
                this.indexPhoto = 0;
            }
        },
        prevPhoto() {
            this.indexPhoto -= 1;

            if (this.indexPhoto < 0) {
                this.indexPhoto = this.photos.length - 1;
            }
        },
        setPhoto(index) {
            this.indexPhoto = index;
        }
    }
})