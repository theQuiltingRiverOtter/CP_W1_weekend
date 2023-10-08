def calculate_mode(array):
    mode = []
    max_element_count = 0
    element_counts = {}
    for element in array:
        element_counts[element] = element_counts.get(element, 0) + 1
    for elem_count in element_counts:
        max_element_count = max(element_counts[elem_count], max_element_count)
    for elem_count in element_counts:
        if element_counts[elem_count] == max_element_count:
            mode.append(elem_count)

    return mode


print(calculate_mode([1, 2, 3, 3]))
