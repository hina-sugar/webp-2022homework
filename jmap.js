(function($) {

    var identifiers = [];
    var identifier = 0;
    var conf = {
        prefectures: [
            { code: 1, name: "北海道", full: "",  cordinate: { x: 41, y: 1, z: 29 }, size: { x: 14, y: 4 }, radius: [1, 1, 1, 0], box : { cordinate: { x: 32, y: 2 }, size : { x: 12, y: 3}} },
            { code: 2, name: "青森", full: "県", cordinate: { x: 41, y: 5, z: 30 }, size: { x: 12, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 3, name: "岩手", full: "県",  cordinate: { x: 47, y: 7, z: 33 }, size: { x: 6, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 4, name: "宮城", full: "県", cordinate: { x: 47, y: 9, z: 34 }, size: { x: 6, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 5, name: "秋田", full: "県", cordinate: { x: 41, y: 7, z: 31 }, size: { x: 6, y: 2 }, radius: [0, 0, 0, 0], box : { cordinate: { x: 30, y: 6 }, size : { x: 12, y: 3}} },
            { code: 6, name: "山形", full: "県", cordinate: { x: 41, y: 9, z: 32 }, size: { x: 6, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 7, name: "福島", full: "県", cordinate: { x: 45, y: 11, z: 39 }, size: { x: 8, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 8, name: "茨城", full: "県", cordinate: { x: 49, y: 13, z: 42 }, size: { x: 4, y: 3 }, radius: [0, 0, 0, 0] },
            { code: 9, name: "栃木", full: "県", cordinate: { x: 45, y: 13, z: 41 }, size: { x: 4, y: 3 }, radius: [0, 0, 0, 0] },
            { code: 10, name: "群馬", full: "県", cordinate: { x: 41, y: 13, z: 40 }, size: { x: 4, y: 3 }, radius: [0, 0, 0, 0] },
            { code: 11, name: "埼玉", full: "県", cordinate: { x: 41, y: 16, z: 43 }, size: { x: 8, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 12, name: "千葉", full: "県", cordinate: { x: 49, y: 16, z: 46 }, size: { x: 4, y: 5 }, radius: [0, 0, 1, 0] },
            { code: 13, name: "東京", full: "都",  cordinate: { x: 41, y: 18, z: 44 }, size: { x: 8, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 14, name: "神奈川", full: "県", cordinate: { x: 41, y: 20, z: 45 }, size: { x: 8, y: 2 }, radius: [0, 0, 1, 0] },
            { code: 15, name: "新潟", full: "県", cordinate: { x: 37, y: 11, z: 35 }, size: { x: 8, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 16, name: "富山", full: "県", cordinate: { x: 33, y: 11, z: 26 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 17, name: "石川", full: "県",cordinate: { x: 29, y: 10, z: 18 }, size: { x: 4, y: 2 }, radius: [1, 1, 0, 0] },
            { code: 18, name: "福井", full: "県",cordinate: { x: 27, y: 12, z: 19 }, size: { x: 6, y: 2 }, radius: [1, 0, 0, 0] },
            { code: 19, name: "山梨", full: "県", cordinate: { x: 37, y: 17, z: 37 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 20, name: "長野", full: "県", cordinate: { x: 37, y: 13, z: 36 }, size: { x: 4, y: 4 }, radius: [0, 0, 0, 0] },
            { code: 21, name: "岐阜", full: "県", cordinate: { x: 33, y: 13, z: 27 }, size: { x: 4, y: 4 }, radius: [0, 0, 0, 0] },
            { code: 22, name: "静岡", full: "県", cordinate: { x: 37, y: 19, z: 38 }, size: { x: 4, y: 3 }, radius: [0, 0, 0, 1] },
            { code: 23, name: "愛知", full: "県", cordinate: { x: 33, y: 17, z: 28 }, size: { x: 4, y: 3 }, radius: [0, 0, 0, 0] },
            { code: 24, name: "三重", full: "県",  cordinate: { x: 29, y: 18, z: 24 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 25, name: "滋賀", full: "県", cordinate: { x: 29, y: 14, z: 22 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 26, name: "京都", full: "府", cordinate: { x: 25, y: 14, z: 20 }, size: { x: 4, y: 3 }, radius: [1, 0, 0, 0] },
            { code: 27, name: "大阪", full: "府",  cordinate: { x: 25, y: 17, z: 21 }, size: { x: 4, y: 3 }, radius: [0, 0, 0, 0] },
            { code: 28, name: "兵庫", full: "県", cordinate: { x: 21, y: 15, z: 13 }, size: { x: 4, y: 4 }, radius: [0, 0, 0, 0] },
            { code: 29, name: "奈良", full: "県",  cordinate: { x: 29, y: 16, z: 23 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 30, name: "和歌山", full: "県",cordinate: { x: 25, y: 20, z: 25 }, size: { x: 6, y: 2 }, radius: [0, 0, 1, 1] },
            { code: 31, name: "鳥取", full: "県",  cordinate: { x: 17, y: 15, z: 11 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 32, name: "島根", full: "県", cordinate: { x: 13, y: 15, z: 9 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 33, name: "岡山", full: "県", cordinate: { x: 17, y: 17, z: 12 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 34, name: "広島", full: "県", cordinate: { x: 13, y: 17, z: 10 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 35, name: "山口", full: "県", cordinate: { x: 9, y: 15, z: 8 }, size: { x: 4, y: 4 }, radius: [0, 0, 0, 0] },
            { code: 36, name: "徳島", full: "県",cordinate: { x: 17, y: 21, z: 17 }, size: { x: 6, y: 2 }, radius: [0, 0, 1, 0] },
            { code: 37, name: "香川", full: "県",cordinate: { x: 17, y: 19, z: 16 }, size: { x: 6, y: 2 }, radius: [0, 1, 0, 0] },
            { code: 38, name: "愛媛", full: "県",cordinate: { x: 11, y: 19, z: 14 }, size: { x: 6, y: 2 }, radius: [1, 0, 0, 0] },
            { code: 39, name: "高知", full: "県", cordinate: { x: 11, y: 21, z: 15 }, size: { x: 6, y: 2 }, radius: [0, 0, 0, 1] },
            { code: 40, name: "福岡", full: "県",  cordinate: { x: 5, y: 15, z: 4 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 41, name: "佐賀", full: "県",  cordinate: { x: 1, y: 17, z: 2 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 42, name: "長崎", full: "県", cordinate: { x: 1, y: 15, z: 1 }, size: { x: 4, y: 2 }, radius: [1, 0, 0, 0] },
            { code: 43, name: "熊本", full: "県",  cordinate: { x: 1, y: 19, z: 3 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 44, name: "大分", full: "県", cordinate: { x: 5, y: 17, z: 5 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 45, name: "宮崎", full: "県",  cordinate: { x: 5, y: 19, z: 6 }, size: { x: 4, y: 2 }, radius: [0, 0, 0, 0] },
            { code: 46, name: "鹿児島", full: "県", cordinate: { x: 1, y: 21, z: 7 }, size: { x: 8, y: 2 }, radius: [0, 0, 1, 1] },
            { code: 47, name: "沖縄", full: "県",  cordinate: { x: 18, y: 11, z: 47 }, size: { x: 4, y: 2, z: 47 }, radius: [1, 1, 1, 1] }
        ],
        heatmap: {},
    };

    $.fn.jmapHeatLabel = function(options) {
        var heatmapUl = $('<ul>').addClass('jmap-heatlabel').attr('jmap-uniq', options + "-heatlabel")
        $(this).append(heatmapUl);
        return this;
    };

    $.fn.jmap = function(options) {
        if (options == 'update') {
            return this;
        }
        identifier++;
        var uniqClass = 'jmap-' + identifier;
        var stylers = [];
        var stylersPrimal = [];

        var params = $.extend({
            id: null,
            width: '140%', height: '80%',
            fontSize: '12px', fontColor: '#fff', font: 'monospace',
            showPrefectureName: true,
            textShadowWidth: '2px', textShadowColor: '#000',
            containerClass: 'jmap-container', contentClass: 'jmap-content',
            prefectureClass: 'jmap-pref', prefectureRadius: '3px', prefectureBackgroundColor: '#333', prefectureBackgroundHoverColor: '#666', 
            prefectureLineWidth: '1px', prefectureLineGap: '1px', prefectureLineColor: '#fff',
            heatmapColors: [], heatmapLabelUnit: '', heatmapFontColors: [], heatmapConditions: [],
            gridTotalRows: 22, gridTotalColumns: 54,
            selectable: true,
            areas: [],
            onSelect: function(e, data) {},
        }, options);

        if (params.id == null)
            params.id = uniqClass;
        if (params.heatmapColors.length <= 0)
            params.heatmapColors = conf.heatmap[params.heatmapType];

　　// Jmap
        var containerCss = {
            'display': 'flex',
            'position': 'relative',
            'font-family': params.font,
            'width': params.width,'height': params.height,
            'border-style': params.lineStyle,
            'padding': params.backgroundPadding,
        };
        var containerSelector = 'div[jmap-id="%s1"]'.replace('%s1', uniqClass)
        var containerStyle = JSON.stringify(containerCss).replace(/",/g, '";').replace(/"/g, '');
        stylers.push(containerSelector + containerStyle);

        var containerDiv = $('<div>')
            .attr('jmap-id', params.id)
            .addClass(params.containerClass);

        var contentCss = {
            'display': 'grid; display:-ms-grid',
            'position': 'relative',
            'width': '100%','height': '100%',
        };

        var contentSelector = 'div[jmap-id="%s1"] .%s2 '.replace('%s1', uniqClass).replace('%s2', params.contentClass);
        var contentStyle = JSON.stringify(contentCss).replace(/",/g, '";').replace(/"/g, '');
        stylers.push(contentSelector + contentStyle);

        if (params.viewType == 'grid') {
            var contentGridSelector = 'div[jmap-id="%s1"] .%s2[jmap-view="grid"] '.replace('%s1', uniqClass).replace('%s2', params.contentClass);
            var contentGridStyle = JSON.stringify(contentGridCss).replace(/",/g, '";').replace(/"/g, '');
            stylersPrimal.push(contentGridSelector + contentGridStyle);
        }

        var contentDiv = $('<div>')
            .attr('jmap-view', params.viewType)
            .addClass(params.contentClass);

        var prefectureCss = {
            'position': 'relative','display': 'flex',
            'margin': params.prefectureLineGap,
            'font-size': params.fontSize,'color': params.fontColor,
            'border-radius': params.prefectureRadius,
            'justify-content': 'center','align-items': 'center',
            'white-space': (params.textNowrap) ? 'nowrap' : 'normal'
        };

        var prefectureSelector = 'div[jmap-id="%s1"] .%s2 '.replace('%s1', uniqClass).replace('%s2', params.prefectureClass);
        var prefectureStyle = JSON.stringify(prefectureCss).replace(/",/g, '";').replace(/"/g, '');
        stylers.push(prefectureSelector + prefectureStyle);

        $('body').on('click', prefectureSelector, function(e){
            return params.onSelect.call(this, e, $(this).data('data'));
        }).on('mouseover', prefectureSelector, function(e){
            return params.onHover.call(this, e, $(this).data('data'));
        }).on('mouseout', prefectureSelector, function(e){
            return params.onMouseout.call(this, e, $(this).data('data'));
        });

        if (params.selectable) {
        var prefectureHoverCss = {}
            var prefectureHoverSelector = 'div[jmap-id="%s1"] .%s2:hover '.replace('%s1', uniqClass).replace('%s2', params.prefectureClass);
            var prefectureHoverStyle = JSON.stringify(prefectureHoverCss).replace(/",/g, '";').replace(/"/g, '');
            stylersPrimal.push(prefectureHoverSelector + prefectureHoverStyle);
        }

        var gridRowIndex = 1;
        var gridColIndex = params.gridOffset;
        $.each(conf.prefectures, function(_index, pref) {
            var pref = $.extend({ option: {} }, pref);
            var option = params.areas.filter(function(_pref) {
                return pref.code == _pref.code;
            })[0] || {};
            pref.option = $.extend(pref.option, option);

            var prefectureIndivisualCss = {
                'grid-column': '%d1 / %d2'.replace('%d1', pref.cordinate.x).replace('%d2', pref.cordinate.x + pref.size.x),
                'grid-row': '%d1 / %d2'.replace('%d1', pref.cordinate.y).replace('%d2', pref.cordinate.y + pref.size.y),
                'background-color': (option.color) ? option.color : params.prefectureBackgroundColor,
            };

            if (params.showRoundedPrefecture)
                prefectureIndivisualCss = $.extend(prefectureIndivisualCss, { 'border-radius': pref.radius.join(' ').replace(/1/g, params.prefectureRadius) });
            if (option.fontColor)
                prefectureIndivisualCss['color'] = option.fontColor;
            var prefectureIndivisualSelector = 'div[jmap-id="%s1"] .%s2[jmap-uniq="%s3"] '.replace('%s1', uniqClass).replace('%s2', params.prefectureClass).replace('%s3', pref.code);
            var prefectureIndivisualStyle = JSON.stringify(prefectureIndivisualCss).replace(/"/g, '').replace(/,/g, ';');
            stylers.push(prefectureIndivisualSelector + prefectureIndivisualStyle);

            var prefDiv = $('<div>')
                .data('data', pref)
                .addClass(params.prefectureClass)
                .attr('jmap-uniq', pref.code);

            if (params.showPrefectureName && !option.name) {
                switch (params.prefectureNameType) {
                    case 'full':
                        prefDiv.html(pref.name + pref.full);
                        break;
                    case 'alphabet':
                        prefDiv.html(pref.alphabet);
                        break;
                    case 'short':
                    default:
                        prefDiv.html(pref.name);
                }
            }
            if (params.showTextNoneSkewed && params.skew != 0) {
                var textDiv = $('<div>').html(prefDiv.html());
                prefDiv.html(textDiv);
            }
            contentDiv.append(prefDiv);
            setTimeout(function() {
                params.onLoad.call(prefDiv, null, pref)
            });
        });

        var jmapStyle = $('<style>').attr('type', 'text/css').html(stylers.join("\n") + "\n" + stylersPrimal.join("\n"));
        containerDiv.append(contentDiv)
        $(this).empty().append(jmapStyle).append(containerDiv);

        return this;
    };
})(jQuery);