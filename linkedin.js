function removePromotedPosts() {
  // Look for elements that contain the word "Promoted"
  const promotedLabels = Array.from(
    document.querySelectorAll("span, div, a")
  ).filter(el => el.innerText && el.innerText.trim() === "Promoted");

  promotedLabels.forEach(label => {
    // Walk up the DOM to find the whole post container
    let node = label;
    while (node && !node.getAttribute("data-id") && node !== document.body) {
      node = node.parentElement;
    }

    if (node && node !== document.body) {
      node.remove();
    }
  });
}

// Run once after load
removePromotedPosts();

// Also run periodically in case new posts load dynamically
setInterval(removePromotedPosts, 3000);
