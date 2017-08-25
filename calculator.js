var module = angular.module ("myApp", []);
	

	//First calculator with inputs
	module.controller ("ctrl",["$scope", function($scope) {
		$scope.result = "";
		$scope.plus = function () {
			$scope.operation = "+";
			}
		$scope.minus = function() {
			$scope.operation = "-";
		}
		$scope.multiple = function() {
			$scope.operation = "*";
		}
		$scope.divide = function() {
			$scope.operation = "/";
		}
		$scope.equal = function() {
			if($scope.operation == "+") {
				$scope.result = $scope.input1 + $scope.input2;
			}
			else if($scope.operation == "-") {
				$scope.result = $scope.input1 - $scope.input2;
			}
			else if($scope.operation == "*") {
				$scope.result = $scope.input1 * $scope.input2;
			}
			else if($scope.operation == "/") {
				$scope.result = $scope.input1 / $scope.input2;
			}
			else {
				console.log("Nema izabrane operacije!")
			}
			$scope.input1 = "";
			$scope.input2 = "";
		}
	}]);

	//Second calculator with buttons
	module.controller ("ctrl2",["$scope", function($scope) {
		$scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		$scope.operations = ["+", "-", "*", "/"];
		$scope.numsArray = [];
		$scope.allnums = [];
		$scope.sum = 0;

		$scope.number = function (number) {
			$scope.numsArray.push(this.n);
			$scope.num = $scope.numsArray.join("");

			$scope.operation = function (operation) {
				if ($scope.num >= 0) {
					$scope.allnums.push($scope.num);
					$scope.numsArray = [];
					if (this.o == "+") {
						$scope.currentoperation = this.o;
						$scope.allnums.push(this.o);
					}
					else if (this.o == "-") {
						$scope.currentoperation = this.o;
						$scope.allnums.push(this.o);
					}
					else if (this.o == "*") {
						$scope.total = $scope.num
						$scope.allnums.push(this.o);
					}
					else if (this.o == "/") {
						$scope.currentoperation = this.o;
						$scope.allnums.push(this.o);
					}
					$scope.equal = function() {
						$scope.allnums.push($scope.num);
						$scope.sum = eval($scope.allnums.join(' '));
						$scope.num = "=" + " " + $scope.sum;
					}
				}
			}

			$scope.reset = function () {
				$scope.total = 0;
				$scope.num = 0;
				$scope.numsArray = [];
				$scope.allnums = [];
			}
		}
	}]);