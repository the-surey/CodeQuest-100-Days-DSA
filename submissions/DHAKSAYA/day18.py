def max_depth(nested_list):
    if not isinstance(nested_list, list):
        return 0
    if not nested_list:
        return 1
    return 1 + max(max_depth(item) for item in nested_list)
nested = [1, 2, 3]
print("Maximum depth:", max_depth(nested)) 
