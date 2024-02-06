let sections = document.querySelectorAll('[id^="section"]');

 $(sections).removeClass("d-flex ");

  if (sections.length > 1) {
      let sectionOne = sections[0];
      sections.forEach((section) => {
          if (section != sectionOne) {
              $(section).addClass("d-none");
          }
      });
  }

  const display = (sectionId) => {
      makeRemainingScreensInvisible(sectionId);
      let section = document.getElementById(sectionId);
      $(section).removeClass("d-none");
      window.scrollTo(0, 0);
  };

  const makeRemainingScreensInvisible = (sectionId) => {
      let sections = document.querySelectorAll('[id^="section"]');
      sections.forEach((section) => {
          let $section = $(section);
          if ($section.attr("id") != sectionId) {
              $section.addClass("d-none");
          }
      });
  };
