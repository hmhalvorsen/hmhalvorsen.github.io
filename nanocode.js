$(document).ready(function() {
   console.log("Ready!");
});

$(document).on('mouseenter', "#large_picture", function() {
  $("#large_picture").removeClass("downscaletransformation"),
  $("#large_picture").addClass("upscaletransformation"),
  $("#large_picture").animate({
    opacity: 1,
  }, 250, function() {
    // Animation complete.
  })
}).on('mouseout', "#large_picture", function() {
  $("#large_picture").removeClass("upscaletransformation"),
  $("#large_picture").addClass("downscaletransformation"),
  $("#large_picture").animate({
    opacity: 0.85,
  }, 250, function() {
    // Animation complete.
  })
});

$(document).on('mouseenter', "#second_picture", function() {
  $("#second_picture").removeClass("downscaletransformation"),
  $("#second_picture").addClass("upscaletransformation"),
  $("#second_picture").animate({
    opacity: 1,
  }, 250, function() {
    // Animation complete.
  })
}).on('mouseout', "#second_picture", function() {
  $("#second_picture").removeClass("upscaletransformation"),
  $("#second_picture").addClass("downscaletransformation"),
  $("#second_picture").animate({
    opacity: 0.85,
  }, 250, function() {
    // Animation complete.
  })
});

$(document).on('mouseenter', "#fourth_picture", function() {
  $("#fourth_picture").removeClass("downscaletransformation"),
  $("#fourth_picture").addClass("upscaletransformation"),
  $("#fourth_picture").animate({
    opacity: 1,
  }, 250, function() {
    // Animation complete.
  })
}).on('mouseout', "#fourth_picture", function() {
  $("#fourth_picture").removeClass("upscaletransformation"),
  $("#fourth_picture").addClass("downscaletransformation"),
  $("#fourth_picture").animate({
    opacity: 0.85,
  }, 250, function() {
    // Animation complete.
  })
});

$(document).on('mouseenter', "#fifth_picture", function() {
  $("#fifth_picture").removeClass("downscaletransformation"),
  $("#fifth_picture").addClass("upscaletransformation"),
  $("#fifth_picture").animate({
    opacity: 1,
  }, 250, function() {
    // Animation complete.
  })
}).on('mouseout', "#fifth_picture", function() {
  $("#fifth_picture").removeClass("upscaletransformation"),
  $("#fifth_picture").addClass("downscaletransformation"),
  $("#fifth_picture").animate({
    opacity: 0.85,
  }, 250, function() {
    // Animation complete.
  })
});

$(document).on('mouseenter', "#third_picture", function() {
  $("#third_picture").removeClass("downscaletransformation"),
  $("#third_picture").addClass("upscaletransformation"),
  $("#third_picture").animate({
    opacity: 1,
  }, 250, function() {
    // Animation complete.
  })
}).on('mouseout', "#third_picture", function() {
  $("#third_picture").removeClass("upscaletransformation"),
  $("#third_picture").addClass("downscaletransformation"),
  $("#third_picture").animate({
    opacity: 0.85,
  }, 250, function() {
    // Animation complete.
  })
});
