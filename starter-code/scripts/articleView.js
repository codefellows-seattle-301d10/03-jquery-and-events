// IN-CLASS TODO: Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.

var articleView = {};



articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      // TODO: If the select box changes to an option that has a value, we should:
        //  1. Hide all of the articles
        //  2. Fade in only the articles that match based on the author.
        //    that was selected. Hint. Use an attribute selector to find those articles
        //    that match the value, and then fade them in.
      $('article').hide();
      // $('article').filter('data-authorname').fadeIn();
      $('article[data-authorname ="' + $(this).val() +'" ]').fadeIn();

    } else {
        // Otherwise, we should:
        //  1.
    }

  });
};

articleView.handleCategoryFilter = function() {
  /* TODO: Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */
};

articleView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function(){
    // TODO: Hide all of the .tab-content sections
    //         fade in the single .tab-content section that is associated
    //        with the .tab element's data-content attribute.

  });
  $('.main-nav .tab:first').click();
};

articleView.setTeasers = function() {
  $('article-body *:nth-of-type(n+2)').hide();
  /* TODO: Add a delegated event handler to reveal the remaining paragraphs.
          when a .read-on link is clicked, we can:
          1. prevent the default action of a link.
          2. Reveal everything in that particular article now.
          3. Hide that read-on link!



  */
};






// TODO: Invoke all of the above functions (I mean, methods!):
articleView.populateFilters();
articleView.handleAuthorFilter();
