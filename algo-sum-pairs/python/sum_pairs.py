# Nested loops - O(n**2) time complexity
# def sum_pairs(input_array: list, target_value: int) -> list:
#     sum_pairs_list = []
#     for i in range(len(input_array)):
#         for j in range(i, len(input_array)):
#             if input_array[i] + input_array[j] == target_value:
#                 sum_pairs_list.append([input_array[i], input_array[j]])

#     if len(sum_pairs_list) == 0:
#         return "unable to find pairs"
#     else:
#         return sum_pairs_list


# hash map - time complexity O(2n) -> O(n)
def sum_pairs(input_array: list, target_value: int) -> list:
    sum_pairs_dict = {}
    for value in input_array:
        if target_value - value in sum_pairs_dict:
            sum_pairs_dict[target_value - value] = value
        else:
            sum_pairs_dict[value] = None
    sum_pairs_list = [[key, val] for key, val in sum_pairs_dict.items() if val != None]
    if len(sum_pairs_list) == 0:
        return "unable to find pairs"
    else:
        return sum_pairs_list
