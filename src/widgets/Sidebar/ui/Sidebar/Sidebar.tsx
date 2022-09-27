import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss';
import React, {useState} from "react";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({className}: SidebarProps) => {
    const { t } = useTranslation();
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setIsCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(cls.sidebar,{[cls.collapsed]: isCollapsed}, [className])}>
            <button onClick={onToggle}>{t('toggle')}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher />
            </div>
        </div>
    );
};
