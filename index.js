const testContainer = document.querySelector(".testimonial-container")
const testimonial = document.querySelector(".testimonial")
const userImage = document.querySelector(".user-img")
const userName = document.querySelector(".username")
const role = document.querySelector(".role")

const testimonials = [
  {
    name: "Ahmar Khan",
    position: "Web developer",
    photo:
      "https://plus.unsplash.com/premium_photo-1663047716627-e0b6c878761e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    text: `        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, possimus
        ab iusto autem, mollitia maiores corporis esse vero fuga veritatis
        ratione, voluptas tempora. Quia voluptatem tenetur tempore consequatur
        dicta laborum ad officiis doloribus facilis sunt, nulla vero distinctio
        praesentium perspiciatis?`,
  },
  {
    name: "Ahsan Khan",
    position: "Web designer",
    photo:
      "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text: `        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, possimus
        ab iusto autem, mollitia maiores corporis esse vero fuga veritatis
        ratione, voluptas tempora. Quia voluptatem tenetur tempore consequatur
        ratione, voluptas tempora. Quia voluptatem tenetur tempore consequatur
        dicta laborum ad officiis doloribus facilis sunt, nulla vero distinctio
        praesentium perspiciatis?`,
  },
  {
    name: "Uzair Niazi",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    text: `        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, possimus
        ab iusto autem, mollitia maiores corporis esse vero fuga veritatis
        ratione, voluptas tempora. Quia voluptatem tenetur tempore consequatur
        dicta laborum ad officiis doloribus facilis sunt, nulla vero distinctio
        ratione, voluptas tempora. Quia voluptatem tenetur tempore consequatur
        dicta laborum ad officiis doloribus facilis sunt, nulla vero distinctio
        praesentium perspiciatis?`,
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]
  userImage.src = photo
  role.innerHTML = position
  userName.innerHTML = name
  testimonial.innerHTML = text

  idx++

  console.log(idx)

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
