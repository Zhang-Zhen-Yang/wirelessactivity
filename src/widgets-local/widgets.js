
import toggle from './toggle/toggle';
import noticeBox from './noticeBox/noticeBox';
import wInput from './wInput/wInput';
import contentNotice from './contentNotice/contentNotice';
import dialogTab from './dialogTab/dialogTab';
import checkbox from './checkbox/checkbox';
import dropdown from './dropdown/dropdown';
import tabSetting from './tabSetting/tabSetting';
import searchInput from './searchInput/searchInput';
import pagination from './pagination/pagination';
import paginationSimple from './paginationSimple/paginationSimple';
import imgSpaceItem from './imgSpaceItem/imgSpaceItem';
import materialSpinner from './materialSpinner/materialSpinner';
import linkIcon from './linkIcon/linkIcon';

import dateRangePicker from './dateRangePicker/dateRangePicker';
import tabLayout from './tabLayout/tabLayout';
import goodsItemLayout from './goodsItemLayout/goodsItemLayout';
import addBtn from './addBtn/addBtn';
import modalDialog from './modalDialog/modalDialog';
import maskReplace from './maskReplace/maskReplace';
import tabItemReorder from './tabItemReorder/tabItemReorder';
import monaco from './monaco/monaco';
import checkedBtn from './checkedBtn/checkedBtn';
import checkedItemBlock from './checkedItemBlock/checkedItemBlock';
import colorPicker from './colorPicker/colorPicker';
import snackbar from './snackbar/snackbar';
import mainPicAlternative from './mainPicAlternative/mainPicAlternative';
import dynamicList from './dynamicList/dynamicList';
import dynamicList2 from './dynamicList2/dynamicList2';
import qrcode from './qrcode/qrcode';
import pageColorPicker from './pageColorPicker/pageColorPicker';
import imgUpload from './imgUpload/imgUpload';





const options = {
    toggle,
    noticeBox,
    wInput,
    contentNotice,
    dialogTab,
    linkIcon,
    checkbox,
    dropdown,
    tabSetting,
    searchInput,
    pagination,
    paginationSimple,
    imgSpaceItem,
    dateRangePicker,
    tabLayout,
    mainPicAlternative,
    goodsItemLayout,
    addBtn,
    modalDialog,
    maskReplace,
    tabItemReorder,
    monaco,
    checkedBtn,
    checkedItemBlock,
    colorPicker,
    snackbar,
    materialSpinner,
    dynamicList,
    dynamicList2,
    qrcode,
    pageColorPicker,
    imgUpload,
};
options.install = (Vue) => {
    for (let component in options) {
        const componentInstaller = options[component];
        if (componentInstaller && component !== 'install') {
            Vue.use(componentInstaller);
        }
    }
};
if(window.Vue){
	for (let component in options) {
		const componentInstaller = options[component];
		if (componentInstaller && component !== 'install') {
			window.Vue.use(componentInstaller);
		}
	}
}
export default options;
