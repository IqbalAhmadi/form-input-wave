// variable
const labels = document.querySelectorAll('.form-control label')

// since it's node list we can use forEach to loop over
labels.forEach((label) => {
  label.innerHTML = label.innerText // this graps every letter
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('') // this turns it back to string
})
