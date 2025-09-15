export const useScroll = () => {
  const scrollToForm = () => {
    const targetSection = document.getElementById('form');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return {
    scrollToForm,
  };
};
