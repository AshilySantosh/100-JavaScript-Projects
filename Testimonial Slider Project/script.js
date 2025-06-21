const testimonials = [
    {
        img: "pic1.jpg",
        quote: "This platform made learning fun and interactive. I feel more confident in my skills now!",
        person: "Person 1"
    },
    {
        img: "pic2.jpg",
        quote: "I never thought I'd enjoy coding until I joined this. The community support is amazing!",
        person: "Person 2"
    },
    {
        img: "pic3.jpg",
        quote: "The projects helped me build real skills. Got my first internship thanks to this!",
        person: "Person 3"
    }
];

let index = 0;

function slider(){
    const quote = document.querySelector(".quote");
    const img = document.querySelector("img");
    const person = document.querySelector(".person");

    const current = testimonials[index];

    img.src = current.img;
    quote.textContent = current.quote;
    person.textContent = current.person;

    index = (index+1)%testimonials.length;
}
slider();
setInterval(slider, 2000);