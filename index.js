/**
 * Created by julien.zhang on 2015/7/7.
 * 对php smarty模板做一些修改，使之可以被nodejs渲染。
 */

'use strict';

module.exports = function(content, file){

    content = content
        .replace(/IF/img, 'if')
        .replace(/\$smarty\.get/img, '$sm__.get')
        .replace(/\$smarty\.post/img, '$sm__.post');

    return content;

};