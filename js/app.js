angular.module('KendoDemos', ['kendo.directives']);

function treeCtrl($scope) {
	$scope.treeData = new kendo.data.HierarchicalDataSource({
		data: [{
			text: 'TreeItem 1',
			expanded: true,
			items: [{
				text: 'TreeSubItem 1.1'
			}],
		}, {
			text: 'TreeItem 2',
		}, {
			text: 'TreeItem 3',
		}]
	});

	// $scope.itemTemplate = '{{dataItem.text}}';

	function makeItem() {
		var newItemTxt = $('#newItem').val();
		return {
			text: newItemTxt
		};
	};

	$scope.addAfter = function(item) {
		var array = item.parent();
		var index = array.indexOf(item);
		var newItem = makeItem();
		array.splice(index + 1, 0, newItem);
	};

	$scope.addBelow = function() {
		var newItem = makeItem();
		$scope.tree.append(newItem, $scope.tree.select());
	};

	$scope.remove = function(item) {
		var array = item.parent();
		var index = array.indexOf(item);
		array.splice(index, 1);
	};

	window.$scope = $scope;
}