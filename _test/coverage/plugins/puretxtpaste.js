/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['plugins/puretxtpaste.js']) {
  _$jscoverage['plugins/puretxtpaste.js'] = [];
  _$jscoverage['plugins/puretxtpaste.js'][7] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][8] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][9] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][12] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][13] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][14] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][16] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][29] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][30] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][31] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][33] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][39] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][41] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][43] = 0;
  _$jscoverage['plugins/puretxtpaste.js'][46] = 0;
}
_$jscoverage['plugins/puretxtpaste.js'].source = ["<span class=\"c\">/**</span>","<span class=\"c\"> * @description &#32431;&#25991;&#26412;&#31896;&#36148;</span>","<span class=\"c\"> * @name puretxtpaste</span>","<span class=\"c\"> * @author zhanyi</span>","<span class=\"c\"> */</span>","","UE<span class=\"k\">.</span>plugins<span class=\"k\">[</span><span class=\"s\">'pasteplain'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","    <span class=\"k\">var</span> me <span class=\"k\">=</span> <span class=\"k\">this</span><span class=\"k\">;</span>","    me<span class=\"k\">.</span>setOpt<span class=\"k\">(</span><span class=\"k\">{</span>","        <span class=\"s\">'pasteplain'</span><span class=\"k\">:</span><span class=\"k\">false</span><span class=\"k\">,</span>","        <span class=\"s\">'filterTxtRules'</span> <span class=\"k\">:</span> <span class=\"k\">function</span><span class=\"k\">()</span><span class=\"k\">{</span>","            <span class=\"k\">function</span> transP<span class=\"k\">(</span>node<span class=\"k\">)</span><span class=\"k\">{</span>","                node<span class=\"k\">.</span>tagName <span class=\"k\">=</span> <span class=\"s\">'p'</span><span class=\"k\">;</span>","                node<span class=\"k\">.</span>setStyle<span class=\"k\">();</span>","            <span class=\"k\">}</span>","            <span class=\"k\">return</span> <span class=\"k\">{</span>","                <span class=\"c\">//&#30452;&#25509;&#21024;&#38500;&#21450;&#20854;&#23383;&#33410;&#28857;&#20869;&#23481;</span>","                <span class=\"s\">'-'</span> <span class=\"k\">:</span> <span class=\"s\">'script style object iframe embed input select'</span><span class=\"k\">,</span>","                <span class=\"s\">'p'</span><span class=\"k\">:</span> <span class=\"k\">{</span>$<span class=\"k\">:</span><span class=\"k\">{}}</span><span class=\"k\">,</span>","                <span class=\"s\">'br'</span><span class=\"k\">:</span><span class=\"k\">{</span>$<span class=\"k\">:</span><span class=\"k\">{}}</span><span class=\"k\">,</span>","                <span class=\"s\">'div'</span><span class=\"k\">:</span><span class=\"k\">{</span><span class=\"s\">'$'</span><span class=\"k\">:</span><span class=\"k\">{}}</span><span class=\"k\">,</span>","                <span class=\"s\">'li'</span><span class=\"k\">:</span><span class=\"k\">{</span><span class=\"s\">'$'</span><span class=\"k\">:</span><span class=\"k\">{}}</span><span class=\"k\">,</span>","                <span class=\"s\">'caption'</span><span class=\"k\">:</span>transP<span class=\"k\">,</span>","                <span class=\"s\">'th'</span><span class=\"k\">:</span>transP<span class=\"k\">,</span>","                <span class=\"s\">'tr'</span><span class=\"k\">:</span>transP<span class=\"k\">,</span>","                <span class=\"s\">'h1'</span><span class=\"k\">:</span>transP<span class=\"k\">,</span><span class=\"s\">'h2'</span><span class=\"k\">:</span>transP<span class=\"k\">,</span><span class=\"s\">'h3'</span><span class=\"k\">:</span>transP<span class=\"k\">,</span><span class=\"s\">'h4'</span><span class=\"k\">:</span>transP<span class=\"k\">,</span><span class=\"s\">'h5'</span><span class=\"k\">:</span>transP<span class=\"k\">,</span><span class=\"s\">'h6'</span><span class=\"k\">:</span>transP<span class=\"k\">,</span>","                <span class=\"s\">'td'</span><span class=\"k\">:</span><span class=\"k\">function</span><span class=\"k\">(</span>node<span class=\"k\">)</span><span class=\"k\">{</span>","                    <span class=\"c\">//&#27809;&#26377;&#20869;&#23481;&#30340;td&#30452;&#25509;&#21024;&#25481;</span>","                    <span class=\"k\">var</span> txt <span class=\"k\">=</span> <span class=\"k\">!!</span>node<span class=\"k\">.</span>innerText<span class=\"k\">();</span>","                    <span class=\"k\">if</span><span class=\"k\">(</span>txt<span class=\"k\">)</span><span class=\"k\">{</span>","                         node<span class=\"k\">.</span>parentNode<span class=\"k\">.</span>insertAfter<span class=\"k\">(</span>UE<span class=\"k\">.</span>uNode<span class=\"k\">.</span>createText<span class=\"k\">(</span><span class=\"s\">' &amp;nbsp; &amp;nbsp;'</span><span class=\"k\">),</span>node<span class=\"k\">);</span>","                    <span class=\"k\">}</span>","                    node<span class=\"k\">.</span>parentNode<span class=\"k\">.</span>removeChild<span class=\"k\">(</span>node<span class=\"k\">,</span>node<span class=\"k\">.</span>innerText<span class=\"k\">())</span>","                <span class=\"k\">}</span>","            <span class=\"k\">}</span>","        <span class=\"k\">}</span><span class=\"k\">()</span>","    <span class=\"k\">}</span><span class=\"k\">);</span>","    <span class=\"c\">//&#26242;&#26102;&#36825;&#37324;&#25903;&#25345;&#19968;&#19979;&#32769;&#29256;&#26412;&#30340;&#23646;&#24615;</span>","    <span class=\"k\">var</span> pasteplain <span class=\"k\">=</span> me<span class=\"k\">.</span>options<span class=\"k\">.</span>pasteplain<span class=\"k\">;</span>","","    me<span class=\"k\">.</span>commands<span class=\"k\">[</span><span class=\"s\">'pasteplain'</span><span class=\"k\">]</span> <span class=\"k\">=</span> <span class=\"k\">{</span>","        queryCommandState<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","            <span class=\"k\">return</span> pasteplain<span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        execCommand<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">()</span><span class=\"k\">{</span>","            pasteplain <span class=\"k\">=</span> <span class=\"k\">!</span>pasteplain<span class=\"k\">|</span><span class=\"s\">0</span><span class=\"k\">;</span>","        <span class=\"k\">}</span><span class=\"k\">,</span>","        notNeedUndo <span class=\"k\">:</span> <span class=\"s\">1</span>","    <span class=\"k\">}</span><span class=\"k\">;</span>","<span class=\"k\">}</span><span class=\"k\">;</span>"];
_$jscoverage['plugins/puretxtpaste.js'][7]++;
UE.plugins.pasteplain = (function () {
  _$jscoverage['plugins/puretxtpaste.js'][8]++;
  var me = this;
  _$jscoverage['plugins/puretxtpaste.js'][9]++;
  me.setOpt({"pasteplain": false, "filterTxtRules": (function () {
  _$jscoverage['plugins/puretxtpaste.js'][12]++;
  function transP(node) {
    _$jscoverage['plugins/puretxtpaste.js'][13]++;
    node.tagName = "p";
    _$jscoverage['plugins/puretxtpaste.js'][14]++;
    node.setStyle();
}
  _$jscoverage['plugins/puretxtpaste.js'][16]++;
  return ({"-": "script style object iframe embed input select", "p": {$: {}}, "br": {$: {}}, "div": {"$": {}}, "li": {"$": {}}, "caption": transP, "th": transP, "tr": transP, "h1": transP, "h2": transP, "h3": transP, "h4": transP, "h5": transP, "h6": transP, "td": (function (node) {
  _$jscoverage['plugins/puretxtpaste.js'][29]++;
  var txt = (! (! node.innerText()));
  _$jscoverage['plugins/puretxtpaste.js'][30]++;
  if (txt) {
    _$jscoverage['plugins/puretxtpaste.js'][31]++;
    node.parentNode.insertAfter(UE.uNode.createText(" &nbsp; &nbsp;"), node);
  }
  _$jscoverage['plugins/puretxtpaste.js'][33]++;
  node.parentNode.removeChild(node, node.innerText());
})});
})()});
  _$jscoverage['plugins/puretxtpaste.js'][39]++;
  var pasteplain = me.options.pasteplain;
  _$jscoverage['plugins/puretxtpaste.js'][41]++;
  me.commands.pasteplain = {queryCommandState: (function () {
  _$jscoverage['plugins/puretxtpaste.js'][43]++;
  return pasteplain;
}), execCommand: (function () {
  _$jscoverage['plugins/puretxtpaste.js'][46]++;
  pasteplain = ((! pasteplain) | 0);
}), notNeedUndo: 1};
});