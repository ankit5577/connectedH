def sumOfArray(arr, index, result):
    if index == len(arr):
        return result
    return sumOfArray(arr, index+1, result+arr[index])

arr = [1, 2, 3]
print(sumOfArray(arr, 0, 0))