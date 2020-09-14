// 239. 滑动窗口最大值
// 难度： 困难
// 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回滑动窗口中的最大值。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sliding-window-maximum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 
var maxSlidingWindow = function(nums, k) {
  const length = nums.length;
  if (!length) {
    return [];
  }
  const list = [];
  const res = [];
  for (let i = 0; i < k; ++i) {
    while(list.length && nums[i] >= nums[list[list.length - 1]]) {
      list.pop();
    }
    list.push(i);
  }
  res.push(nums[list[0]]);
  for (let i = k; i < length; ++i) {
    if(list.length && i - k + 1 > list[0]) {
      list.shift();
    }
    while(list.length && nums[i] >= nums[list[list.length - 1]]) {
      list.pop();
    }
    list.push(i);
    res.push(nums[list[0]]);
  }
  return res;
};