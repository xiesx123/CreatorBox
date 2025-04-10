from matcha.utils.instantiators import instantiate_callbacks, instantiate_loggers
from matcha.utils.logging_utils import log_hyperparameters
from matcha.utils.pylogger import get_pylogger
from matcha.utils.rich_utils import enforce_tags, print_config_tree
from matcha.utils.utils import extras, get_metric_value, task_wrapper

_ = instantiate_callbacks
_ = instantiate_loggers
_ = log_hyperparameters
_ = get_pylogger
_ = enforce_tags
_ = print_config_tree
_ = extras
_ = get_metric_value
_ = task_wrapper
