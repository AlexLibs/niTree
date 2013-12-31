niTree
======

jQuery plugin implementing Tree/Forest with checkboxes (including indeterminate state). JSON is used as a source.

# Features
* lightweight
* tree manipulation methods
* collapse/expand
* advanced checkbox logic
* check/uncheck all the descendants
* indeterminate state of the parent's checkbox when part of the descendants are checked (but not all of them)
* get checked/unchecked or/and all/leafs nodes' id's
* JSON as a source
* check on load some of the checkboxes via the JSON source
* setting attributes (id, classes, data or any custom ones) to the nodes via JSON source
* Adding a subtree to a node (new*)

# Demo

http://jsbin.com/isUbUbu/5

# Quickstart
Include css and javascript:

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
    <script src="jquery.nitree.js"></script>
    <link rel="stylesheet" href="css/nitree.css">

Create a container in your HTML:

    <div id=tree1></div>

Create a JSON source for the tree:

    var treeData1 =
        [{
            label: 'Node0 (html enabled: <a href="#">link tag</a>)',
            id: 'node0',
            attributes: {
                'class': ['class_node0_a', 'class_node0_b', 'red_node'],
                'data-type': 'site_brand_list'
            },
            children: [
                {
                    label: 'Node0_1',
                    id: 'node0_1',
                    attributes: {
                        'class': ['class_node0_1_a', 'class_node0_1_b', 'bold'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'Node0_1_1',
                            id: 'node0_1_1',
                            attributes: {
                                'class': ['class_node0_1_1_a', 'class_node0_1_1_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                }
            ]
        }];

Create the tree and celebrate:

    $(function(){
      var tree1 = $('#tree1').niTree({treeData: treeData1});
    });

To collapse the tree use:

    tree1.niTree('collapseAll');
    
To expand the tree use:

    tree1.niTree('expandAll');

To get the id's of all the checked/unchecked nodes (or just leafs only) use:

    var option = {selected: false, leafsOnly: true};//set selected and leafsOnly according to your needs
    tree1.niTree('get', options);
    

# Comming soon:
* Ajax load

