var treeData1 = firstTreeData();
var treeData2 = secondTreeData();
var subTreeData = subTreeData();

var tree1 = $('#tree1').niTree({treeData: treeData1}),
    $log1 = $('#log1');
tree1.niTree({treeData: subTreeData, parentNodeID: 'tree1_node0_1'});

$('#btn_expand1').on('click', function(){
    tree1.niTree('expandAll');
});
$('#btn_collapse1').on('click', function(){
    tree1.niTree('collapseAll');
});
$('#btn_checked1').on('click', function(){
    $log1.prepend('[' + tree1.niTree('get', {selected: true}).join(', ') + ']\n');
});
$('#btn_checked_leafs1').on('click', function(){
    $log1.prepend('[' + tree1.niTree('get', {selected: true, leafsOnly: true}).join(', ') + ']\n');
});
$('#btn_unchecked1').on('click', function(){
    $log1.prepend('[' + tree1.niTree('get', {selected: false}).join(', ') + ']\n');
});
$('#btn_unchecked_leafs1').on('click', function(){
    $log1.prepend('[' + tree1.niTree('get', {selected: false, leafsOnly: true}).join(', ') + ']\n');
});

var tree2 = $('#tree2').niTree({treeData: treeData2}),
    $log2 = $('#log2');
$('#btn_expand2').on('click', function(){
    tree2.niTree('expandAll');
});
$('#btn_collapse2').on('click', function(){
    tree2.niTree('collapseAll');
});
$('#btn_checked2').on('click', function(){
    $log2.prepend('[' + tree2.niTree('get', {selected: true}).join(', ') + ']\n');
});
$('#btn_checked_leafs2').on('click', function(){
    $log2.prepend('[' + tree2.niTree('get', {selected: true, leafsOnly: true}).join(', ') + ']\n');
});
$('#btn_unchecked2').on('click', function(){
    $log2.prepend('[' + tree2.niTree('get', {selected: false}).join(', ') + ']\n');
});
$('#btn_unchecked_leafs2').on('click', function(){
    $log2.prepend('[' + tree2.niTree('get', {selected: false, leafsOnly: true}).join(', ') + ']\n');
});


function firstTreeData(){
    return [
        {
            label: 'Node0 (html enabled: <a href="#">link tag</a>)',
            id: 'tree1_node0',
            attributes: {
                'class': ['class_node0_a', 'class_node0_b', 'red_node'],
                'data-type': 'site_brand_list'
            },
            children: [
                {
                    label: 'Node0_1',
                    id: 'tree1_node0_1',
                    attributes: {
                        'class': ['class_node0_1_a', 'class_node0_1_b', 'bold'],
                        'data-type': 'site_brand_list_child'
                    }/*,
                    children: [
                        {
                            label: 'Node0_1_1',
                            id: 'tree1_node0_1_1',
                            attributes: {
                                'class': ['class_node0_1_1_a', 'class_node0_1_1_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]*/
                }
            ]
        },
        {
            label: 'Node1',
            id: 'tree1_node1',
            attributes: {
                'class': ['class_node1_a', 'class_node1_b'],
                'data-type': 'site_brand_list'
            },
            children: [
                {
                    label: 'Node1_1',
                    id: 'tree1_node1_1',
                    attributes: {
                        'class': ['class_node1_1_a', 'class_node1_1_b', 'red_node'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'Node1_1_1',
                            id: 'tree1_node1_1_1',
                            attributes: {
                                'class': ['class_node1_1_1_a', 'class_node1_1_1_b', 'ni_tree_no_checkbox'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'Node1_1_2',
                            id: 'tree1_node1_1_2',
                            attributes: {
                                'class': ['class_node1_1_2_a', 'class_node1_1_2_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                },
                {
                    label: 'Node1_2',
                    id: 'tree1_node1_2',
                    attributes: {
                        'class': ['class_node1_2_a', 'class_node1_2_b', 'ni_tree_init_checked'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'Node1_2_1',
                            id: 'tree1_node1_2_1',
                            attributes: {
                                'class': ['class_node1_2_1_a', 'class_node1_2_1_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'Node1_2_2',
                            id: 'tree1_node1_2_2',
                            attributes: {
                                'class': ['class_node1_2_2_a', 'class_node1_2_2_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                },
                {
                    label: 'Node1_3',
                    id: 'tree1_node1_3',
                    attributes: {
                        'class': ['class_node1_3_a'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'Node1_3_1',
                            id: 'tree1_node1_3_1',
                            attributes: {
                                'class': ['class_node1_3_1_a', 'class_node1_3_1_b', 'ni_tree_no_checkbox'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'Node1_3_3',
                            id: 'tree1_node1_3_3',
                            attributes: {
                                'class': ['class_node1_3_2_a', 'class_node1_3_2_b', 'ni_tree_no_checkbox'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                },
                {
                    label: 'Node1_4',
                    id: 'tree1_node1_4',
                    attributes: {
                        'class': ['class_node1_4_a'],
                        'data-type': 'site_brand_list_child'
                    }
                }
            ]
        }
    ];
}

function secondTreeData(){
    return [
        {
            label: 'tree2_Node0 (html enabled: <i>italic</i>)',
            id: 'tree2_node0',
            attributes: {
                'class': ['class_node0_a', 'class_node0_b', 'red_node'],
                'data-type': 'site_brand_list'
            },
            children: [
                {
                    label: 'tree2_Node0_1',
                    id: 'tree2_node0_1',
                    attributes: {
                        'class': ['class_node0_1_a', 'class_node0_1_b', 'bold'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'tree2_Node0_1_1',
                            id: 'tree2_node0_1_1',
                            attributes: {
                                'class': ['class_node0_1_1_a', 'class_node0_1_1_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                }
            ]
        },
        {
            label: 'tree2_Node1',
            id: 'tree2_node1',
            attributes: {
                'class': ['class_node1_a', 'class_node1_b'],
                'data-type': 'site_brand_list'
            },
            children: [
                {
                    label: 'tree2_Node1_1',
                    id: 'tree2_node1_1',
                    attributes: {
                        'class': ['class_node1_1_a', 'class_node1_1_b', 'red_node'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'tree2_Node1_1_1',
                            id: 'tree2_node1_1_1',
                            attributes: {
                                'class': ['class_node1_1_1_a', 'class_node1_1_1_b', 'ni_tree_no_checkbox'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'tree2_Node1_1_2',
                            id: 'tree2_node1_1_2',
                            attributes: {
                                'class': ['class_node1_1_2_a', 'class_node1_1_2_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                },
                {
                    label: 'tree2_Node1_2',
                    id: 'tree2_node1_2',
                    attributes: {
                        'class': ['class_node1_2_a', 'class_node1_2_b', 'ni_tree_init_checked'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'tree2_Node1_2_1',
                            id: 'tree2_node1_2_1',
                            attributes: {
                                'class': ['class_node1_2_1_a', 'class_node1_2_1_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'tree2_Node1_2_2',
                            id: 'tree2_node1_2_2',
                            attributes: {
                                'class': ['class_node1_2_2_a', 'class_node1_2_2_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                }
            ]
        }
    ];
}

function subTreeData(){
    return [
        {
            label: 'sub_tree_Node0 (html enabled: <i>italic</i>)',
            id: 'sub_tree_node0',
            attributes: {
                'class': ['class_node0_a', 'class_node0_b', 'red_node'],
                'data-type': 'site_brand_list'
            },
            children: [
                {
                    label: 'sub_tree_Node0_1',
                    id: 'sub_tree_node0_1',
                    attributes: {
                        'class': ['class_node0_1_a', 'class_node0_1_b', 'bold'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'sub_tree_Node0_1_1',
                            id: 'sub_tree_node0_1_1',
                            attributes: {
                                'class': ['class_node0_1_1_a', 'class_node0_1_1_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                }
            ]
        },
        {
            label: 'sub_tree_Node1',
            id: 'sub_tree_node1',
            attributes: {
                'class': ['class_node1_a', 'class_node1_b'],
                'data-type': 'site_brand_list'
            },
            children: [
                {
                    label: 'sub_tree_Node1_1',
                    id: 'sub_tree_node1_1',
                    attributes: {
                        'class': ['class_node1_1_a', 'class_node1_1_b', 'red_node'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'sub_tree_Node1_1_1',
                            id: 'sub_tree_node1_1_1',
                            attributes: {
                                'class': ['class_node1_1_1_a', 'class_node1_1_1_b', 'ni_tree_no_checkbox'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'sub_tree_Node1_1_2',
                            id: 'sub_tree_node1_1_2',
                            attributes: {
                                'class': ['class_node1_1_2_a', 'class_node1_1_2_b', 'ni_tree_no_checkbox'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                },
                {
                    label: 'sub_tree_Node1_2',
                    id: 'sub_tree_node1_2',
                    attributes: {
                        'class': ['class_node1_2_a', 'class_node1_2_b', 'ni_tree_init_checked'],
                        'data-type': 'site_brand_list_child'
                    },
                    children: [
                        {
                            label: 'sub_tree_Node1_2_1',
                            id: 'sub_tree_node1_2_1',
                            attributes: {
                                'class': ['class_node1_2_1_a', 'class_node1_2_1_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        },
                        {
                            label: 'sub_tree_Node1_2_2',
                            id: 'sub_tree_node1_2_2',
                            attributes: {
                                'class': ['class_node1_2_2_a', 'class_node1_2_2_b'],
                                'data-type': 'site_brand_list_child'
                            }
                        }
                    ]
                }
            ]
        }
    ];
}
