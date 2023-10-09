# REMEMBER TO PSEUDOCODE
def pad(array, min_size, value=None):
    new_list = array[:]
    size = min_size - len(array)
    for i in range(size):
        new_list.append(value)
    return new_list
