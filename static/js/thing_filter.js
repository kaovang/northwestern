"use strict";

const ThingFilter = (function() {
    function ThingFilter() {
        this.things = [];
        this.bindInputField();
        this.getTheThings(function(results) {
            this.things = results;
            this.updateResultsList(results);
        }.bind(this));
    }

    const p = ThingFilter.prototype;

    p.bindInputField = function() {
        const $this = this;
        $('#filter-input').on({
            keyup: function() {
                const value = $(this).val();
                let results = $this.things;
                if (value !== '') {
                    // PERFORM THE FILTER ONLY IF WE HAVE A VALUE
                    results = results.filter(function(thing) {
                        return thing.toLowerCase().includes(value.toLowerCase());
                    });
                }
                $this.updateResultsList(results, value);
            }
        });
    };

    p.getTheThings = function(callback) {
        $.get('http://localhost:3100/things', function(response) {
            callback(response.results);
        }).fail(function() {
            alert("Failed to retrieve data.");
        });
    };

    p.updateResultsList = function(things, filter_value) {
        const $resultsList = $('#results-list').empty();
        things.forEach(function(thing) {
            if(filter_value !== undefined && filter_value !== '') {
                thing = thing.replace(new RegExp('('+filter_value+')', 'i'), '<strong>$1</strong>');
            }
            $resultsList.append('<li>' + thing + '</li>');
        });
    };

    return ThingFilter;
})();

new ThingFilter();