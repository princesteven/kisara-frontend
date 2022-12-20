import { Input } from 'antd';
import { ContentActionsProps } from './content-actions-types';
// import {Button} from "../../index";
import { Link } from 'react-router-dom';
import { Button } from 'antd';

/**
 * @function ContentActions
 * @description
 *      Add Content Actions for filtering and creation of new entries.
 *      On removing onSearch param, search bar will not appear.
 * @param icon
 * @param link
 * @param buttonTitle
 * @param onSearch
 * @param selector
 * @param searchText
 *
 * @version 2.0.0
 * @since 2.0.0
 * @author Prince Malipula
 * @author Muhammad Mwinchande
 * @returns {object}
 */
const ContentActions: React.FC<ContentActionsProps> = ({
    icon,
    link,
    buttonTitle,
    onSearch,
    selector,
    searchText,
}) => {
    return (
        <div className="grid grid-cols-12 gap-0">
            <div className="col-span-12">
                <div className="p-1">
                    <div className="grid grid-cols-12 gap-0">
                        {onSearch && (
                            <div className="col-span-6">
                                <Input.Search
                                    size="small"
                                    placeholder={searchText ?? 'Search'}
                                    name="q"
                                    onSearch={onSearch}
                                />
                            </div>
                        )}
                        <div
                            className={`${
                                onSearch
                                    ? 'md:col-span-6 col-span-5'
                                    : 'md:col-span-12 col-span-5 '
                            } ${buttonTitle ? 'block' : 'hidden'}`}
                        >
                            {link && buttonTitle && (
                                <Link style={{ float: 'right' }} to={link}>
                                    {/*<Button*/}
                                    {/*  title={buttonTitle}*/}
                                    {/*  icon={icon}*/}
                                    {/*  type={'primary'}*/}
                                    {/*/>*/}
                                    <Button icon={icon} type={'primary'}>
                                        {buttonTitle}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentActions;
