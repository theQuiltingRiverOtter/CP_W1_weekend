def sum_pairs(input_array: list, target_value: int) -> list:
    sum_pairs_list = []
    for i in range(len(input_array)):
        for j in range(i, len(input_array)):
            if input_array[i] + input_array[j] == target_value:
                sum_pairs_list.append([input_array[i], input_array[j]])

    if len(sum_pairs_list) == 0:
        return "unable to find pairs"
    else:
        return sum_pairs_list
