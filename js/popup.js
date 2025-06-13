document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('consult-popup');
  const shrinked = document.getElementById('shrinked-popup');
  const closeBtn = document.getElementById('close-popup');
  const form = document.getElementById('consult-form');

  // Show popup after 15s
  setTimeout(() => {
    if (!localStorage.getItem('popupSubmitted')) {
      popup.classList.remove('hidden');
    }
  }, 15000);

  // On close, shrink to corner
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
    shrinked.classList.remove('hidden');

    // Re-expand after 30s
    setTimeout(() => {
      if (!localStorage.getItem('popupSubmitted')) {
        popup.classList.remove('hidden');
        shrinked.classList.add('hidden');
      }
    }, 30000);
  });

  // On shrinked click
  shrinked.addEventListener('click', () => {
    popup.classList.remove('hidden');
    shrinked.classList.add('hidden');
  });

  // Submit form
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const reason = form.reason.value;

    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert('Invalid email');
      return;
    }

    if (!phoneRegex.test(phone)) {
      alert('Phone must be 10 digits and start with 6-9');
      return;
    }

    if (!name || !reason) {
      alert('Please fill all fields');
      return;
    }

    // Simulate submission
    alert('Thank you! We’ll reach you soon.');
    localStorage.setItem('popupSubmitted', 'true');
    popup.classList.add('hidden');
    shrinked.classList.add('hidden');
  });
});
