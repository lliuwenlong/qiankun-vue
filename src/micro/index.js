import {
    registerMicroApps,
    addGlobalUncaughtErrorHandler,
    start,
} from "qiankun";

export default function (apps) {
    registerMicroApps(apps, {
        beforeLoad: () => {
            // 加载微应用前，加载进度条
            return Promise.resolve();
        },
        afterMount: () => {
            return Promise.resolve();
        },
    });

    addGlobalUncaughtErrorHandler((event) => {
        const { msg } = event;
        // 加载失败时提示
        if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
            console.log(msg);
        }
    });

    start();
}
