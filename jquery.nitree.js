(function($){
    var methods = {
        init : function(options) {
            var defaults = {
                treeData: [{'label': 'Empty tree'}]
            };
            options = $.extend(defaults, options);
            function addNodes($el, treeData, root){
                treeData.forEach(function(child){
                    child.attributes = child.attributes || {};
                    $.each(child.attributes, function(key, value){
                        child.attributes[key] = $.isArray(value) ? value.join(' ') : value;
                    });
                    if(child.id){
                        child.attributes.id = child.id;
                    }
                    var $ul = $('<ul>', root ? {'class': 'ni_tree'} : {}),
                        $li = $('<li>', child.attributes),
                        $label = $('<span/>').html(child.label);
                    $li.append($label);
                    $ul.append($li);
                    $el.append($ul);
                    child.children && addNodes($li, child.children);
                });
            }
            function init_tree_open_close($tree){
                //add controls
                var $li = $tree.find('li'),
                    li_attr = {'type': 'checkbox', 'class': 'tree_checkbox'};
                $tree.find('li')
                    .filter(':not(.ni_tree_no_checkbox)')
                    .prepend($('<input>', li_attr))
                    .end()
                    .has('ul')
                    .prepend($('<span>', {'class': 'tree_ctrl'}))
                    .parent().addClass('has_subtree');
                //open/close functionality for the tree
                $tree.find('.tree_ctrl').click(function(){
                    $(this).parent()
                        .toggleClass('tree_close');
                });
            }

            //disable the checkboxes of the empty lists (empty = doesn't have li-children with checkboxes)
            function disable_checkboxes_for_empty_lists($tree){
                var $empty_lists = $tree.find('li')
                    .has('li')
                    .filter(':not(:has(li .tree_checkbox))');
                $empty_lists.children('.tree_checkbox').prop('disabled', true);
                $empty_lists.children('.tree_checkbox')
                    .removeClass('tree_checkbox')
                    .addClass('tree_checkbox_disabled');
            }

            function init_checking_behavior($tree){
                $tree.find('.tree_checkbox').change(function(){
                    var checked = $(this).is(':checked');
                    $(this).parent().find('.tree_checkbox')
                        .prop('checked', checked)
                        .prop('indeterminate', false);

                    $(this).prop("indeterminate", false);
                    $(this).parents('li')
                        .each(function(){
                            var $container_li = $(this).parents('li:first');
                            var $containers_checkboxes = $container_li.children('input.tree_checkbox');
                            $containers_checkboxes.prop("indeterminate", false);
                            if ($container_li.find('li input.tree_checkbox:not(:checked)').length) {
                                $containers_checkboxes.prop('checked', false);
                                if ($container_li.find('li input.tree_checkbox:checked').length) {
                                    $containers_checkboxes.prop("indeterminate", true);
                                }
                            } else {
                                $containers_checkboxes.prop('checked', true);
                            }
                        });
                });
                $tree.find('li.ni_tree_init_checked>.tree_checkbox')
                    .prop('checked', true)
                    .change();
            }
            return this.each(function() {
                addNodes($(this), options.treeData, true);

                init_tree_open_close($(this));
                disable_checkboxes_for_empty_lists($(this));
                init_checking_behavior($(this));
            });
        },
        //options example: {selected: false, leafsOnly: true} - get unselected leafs
        get: function(options){
            var defaults = {selected: true};
            options = $.extend(defaults, options);
            var $lis = this;
            if(options.leafsOnly){
                $lis = this.find('li:not(:has(ul))');
            }
            var $treeCheckboxes;
            if(options.selected){
                $treeCheckboxes = $lis.find('.tree_checkbox:checked');
            } else {
                $treeCheckboxes = $lis.find('.tree_checkbox:not(:checked)');
            }
            return $treeCheckboxes.map(function(){
                return $(this).parent().prop('id');
            }).toArray();
        },
        expandAll : function() {
            this.find('.has_subtree').children('li').removeClass('tree_close');
            return this;
        },
        collapseAll : function() {
            this.find('.has_subtree').children('li').addClass('tree_close');
            return this;
        }
    };

    $.fn.niTree = function(methodOrOptions) {
        if(methods[methodOrOptions] ){
            return methods[ methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || ! methodOrOptions) {
            // Default to "init"
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  methodOrOptions + ' does not exist on jQuery.niTree');
        }
    };

})(jQuery);
