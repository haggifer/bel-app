import React, {
  ComponentType,
  lazy,
  LazyExoticComponent,
  ReactElement,
  Suspense,
  useEffect,
  useMemo,
  useState
} from 'react';
import { useNavigate, useParams } from "react-router-dom"
import classes from "./LazyTabs.module.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { selectTabs } from "../../../redux/selectors/tabs";
import { useEffectOnce } from "../../../utils/hooks/useEffectOnce";
import { getTabs } from "../../../redux/features/tabs/tabsThunks";
import classNames from "classnames";
import CenteredCircleLoader from "../../common/CenteredCircleLoader/CenteredCircleLoader";
import LoadErrorComponent from "./LoadErrorComponent";

export default function LazyTabs(): ReactElement {
  const dispatch = useAppDispatch()

  const params = useParams()
  const navigate = useNavigate()

  const tabs = useAppSelector(selectTabs)

  const lazyComponents = useMemo<Record<string, LazyExoticComponent<ComponentType>>>(() => {
    if (!tabs.data) {
      return {}
    }

    return Object.fromEntries(
      tabs.data.map(tab => [
        tab.id,
        lazy(() => loadFile(tab.path))
      ])
    )
  }, [tabs.data])

  const [CurrentContent, setCurrentContent] = useState<LazyExoticComponent<ComponentType> | null>(null)

  useEffect(() => {
    if (params.id || !tabs.data || !tabs.data.length) {
      return
    }

    navigate(`/tabs/${tabs.data[0].id}`)
  }, [params.id, tabs.data]);

  useEffect(() => {
    if (!params.id || !lazyComponents[params.id!]) {
      setCurrentContent(null)
    }

    setCurrentContent(lazyComponents[params.id!] as LazyExoticComponent<ComponentType>)
  }, [params.id, lazyComponents]);

  useEffectOnce(() => {
    dispatch(getTabs())
  })

  const updateTab = (newId: string) => {
    navigate(`/tabs/${newId}`)
  }

  const loadFile = async (path: string) => {
    try {
      await new Promise((res) => setTimeout(res, 1000))

      return await import(`../../${path}`);
    } catch (error) {
      return {
        default: () => <LoadErrorComponent path={`../../${path}`}/>,
      };
    }
  }

  return (
    tabs.loading ?
      <CenteredCircleLoader/> :
      !tabs.data ?
        <p><strong>No tabs available!</strong></p> :
        <div className={classes.container}>
          <div className={classes.header}>
            {
              tabs.data.map(tab => (
                <span
                  className={classNames(
                    classes.header_item,
                    tab.id === params.id && classes.active,
                  )}
                  key={tab.id}
                  onClick={() => updateTab(tab.id)}
                >{tab.title}</span>
              ))
            }
          </div>

          <div className={classes.content}>
            <Suspense fallback={<CenteredCircleLoader/>}>
              {CurrentContent && <CurrentContent/>}
            </Suspense>
          </div>
        </div>
  )
}