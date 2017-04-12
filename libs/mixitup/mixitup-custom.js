// To keep our code clean and modular, all custom functionality will be contained inside a single object literal called "buttonFilter".
var buttonFilter = {
  
  // Declare any variables we will need as properties of the object
  
  $filters: null,
  $reset: null,
  groups: [],
  outputArray: [],
  outputString: '',
  
  // The "init" method will run on document ready and cache any jQuery objects we will need.
  
  init: function(){
    var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.
    
    self.$filters = $('#Filters');
    self.$reset = $('#Reset');
    self.$container = $('#Container');
    
    self.$filters.find('fieldset').each(function(){
      var $this = $(this);
      
      self.groups.push({
        $buttons: $this.find('.filter-btn'),
        $dropdown: $this.find('select'),
        active: ''
      });
    });
    
    self.bindHandlers();
  },
  
  // The "bindHandlers" method will listen for whenever a button is clicked. 
  
  bindHandlers: function(){
    var self = this;
    
    // Handle filter clicks
    
    self.$filters.on('click', '.filter-btn', function(e){
      e.preventDefault();
      
      var $button = $(this);
      
      // If the button is active, remove the active class, else make active and deactivate others.
      
      $button.hasClass('active') ?
        $button.removeClass('active') :
        $button.addClass('active').siblings('.filter-btn').removeClass('active');
      
      self.parseFilters();
    });
    
    // Handle dropdown change
    
    self.$filters.on('change', function(){
      self.parseFilters();           
    });
    
    // Handle reset click
    
    self.$reset.on('click', function(e){
      e.preventDefault();
      
      self.$filters.find('.filter-btn').removeClass('active');
      self.$filters.find('.show-all').addClass('active');
      self.$filters.find('select').val('');
      
      self.parseFilters();
    });
  },
  
  // The parseFilters method checks which filters are active in each group:
  
  parseFilters: function(){
    var self = this;
 
    // loop through each filter group and grap the active filter from each one.
    
    for(var i = 0, group; group = self.groups[i]; i++){
      group.active = group.$buttons.length ? 
        group.$buttons.filter('.active').attr('data-filter') || '' :
        group.$dropdown.val();
    }
    
    self.concatenate();
  },
  
  // The "concatenate" method will crawl through each group, concatenating filters as desired:
  
  concatenate: function(){
    var self = this;
    
    self.outputString = ''; // Reset output string
    
    for(var i = 0, group; group = self.groups[i]; i++){
      self.outputString += group.active;
    }
    
    // If the output string is empty, show all rather than none:
    
    !self.outputString.length && (self.outputString = 'all'); 
    
    // classNames
    
    // ^ we can check the console here to take a look at the filter string that is produced
    
    // Send the output string to MixItUp via the 'filter' method:
    
	  if(self.$container.mixItUp('isLoaded')){
    	self.$container.mixItUp('filter', self.outputString);
	  }
  }
};
  
// On document ready, initialise our code.

function instalPagination(customLimit){
  customLimit = customLimit || 6;
  // Initialize buttonFilter code
      
  buttonFilter.init();
      
  // Instantiate MixItUp
  $('.portfolio-wrap').mixItUp( {
    selectors: {filter: 'filter-btn'}
    ,pagination: {
      // limit: 4
      limit: customLimit,
      generatePagers: true,
        prevButtonHTML: '<div class="show-more show-more--position"><i class="fa fa-angle-left" aria-hidden="true"></i><i class="fa fa-angle-left" aria-hidden="true"></i><span>Смотреть прошлые</span></div>',
        nextButtonHTML: '<div class="show-more show-more--position"><span>Смотреть далее</span><i class="fa fa-angle-right" aria-hidden="true"></i><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
    },
    controls: {
      enable: true //default
    },
    callbacks: {
      onMixFail: function(){
        alert('No items were found matching the selected filters.');
      }
    }
  }); 

};

function checkWidthPagination() {
    if( $(window).width() < 1355 ) {
        instalPagination(4);
    } else {
        instalPagination(5);
    }
}

checkWidthPagination();


//Custom Buttons
function nextButtonView() {
    var buttonObj = $('.pager.page-next');
    if( buttonObj ) {

        var btnWrap = buttonObj.append('<div class="show-more show-more--position"></div>');
        btnWrap.append('<span>Смотреть далее</span>');
        btnWrap.append('<i class="fa fa-angle-right" aria-hidden="true"></i>');
        btnWrap.append('<i class="fa fa-angle-right" aria-hidden="true"></i>');
    }
}

